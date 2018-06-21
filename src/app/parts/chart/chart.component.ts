import { Component, Input } from '@angular/core';
import { Stock } from 'iex-service';

interface HighchartOHLCSeries {
	x: number; // timestamp
	open: number;
	high: number;
	low: number;
	close: number;
	name?: string;
	color?: string;
}

interface HighchartVolume {
	x: number; // timestamp
	y: number; // volumn
	name?: string;
	color?: string;
}

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.less']
})
export class ChartComponent {
	private options: Object;
	private _symbol: string;
	private ohlcSeries: HighchartOHLCSeries[];
	private volume: HighchartVolume[];

	@Input() set symbol(value: string) {
		this._symbol = value;
		Stock.Chart.get(this._symbol, '5y')
		.then((chartData: Stock.Chart.MultiDay.Response[]) => {
			this.ohlcSeries = ChartComponent.iexToHighchartOHLC(chartData);
			this.volume = ChartComponent.iexToHighchartVolume(chartData, this.ohlcSeries);
			this.updateOptions();
		});
	}

	/**
	 * IEX has two different date formats depending on 1d or not 1d
	 * Convert these to a readable string where the exchange is (EST)
	 */
	static iexDateToReadableString(iexDate: string, iexMinute?: string) {
		// convert from "YYYYMMDD", "HH:MM" to timestamp
		if (iexMinute != null)
			return iexDate.substring(0, 4) + '-'
			     + iexDate.substring(4, 6) + '-'
			     + iexDate.substring(6, 8) + ' '
			     + iexMinute + ' EST';

		// convert from "YYYY-MM-DD"
		return iexDate + ' EST';
	}

	static iexToHighchartOHLC(iex: (Stock.Chart.MultiDay.Response | Stock.Chart.OneDay.Response)[]): HighchartOHLCSeries[] {
		return iex.map((response): HighchartOHLCSeries => {
			const date = ChartComponent.iexDateToReadableString(response.date, response.minute);
			return {
				x: Date.parse(date),
				open: response.open,
				high: response.high,
				low: response.low,
				close: response.close,
				name: date
			};
		});
	}

	static iexToHighchartVolume(iex: Stock.Chart.MultiDay.Response[], ohlcSeries: HighchartOHLCSeries[]): HighchartVolume[] {
		return iex.map((response, index): HighchartVolume => {
			const date = ChartComponent.iexDateToReadableString(response.date, response.minute);
			return {
				x: Date.parse(date),
				y: response.volume,
				name: date,
				color: ohlcSeries[index].open < ohlcSeries[index].close ? '#0f0' : '#f00'
			};
		});
	}

	updateOptions() {

		// TODO: fix colors, it's not indexing correctly
		const colors = this.ohlcSeries.map(ohlc => ohlc.open < ohlc.close ? '#0f0' : '#f00');

		this.options = {

			rangeSelector: {
				selected: 1
			},

			title: {
				text: this._symbol
			},

			yAxis: [{
				labels: {
					align: 'right',
					x: -3
				},
				title: {
					text: 'OHLC'
				},
				height: '60%',
				lineWidth: 2,
				resize: {
					enabled: true
				}
			}, {
				labels: {
					align: 'right',
					x: -3
				},
				title: {
					text: 'Volume'
				},
				top: '65%',
				height: '35%',
				offset: 0,
				lineWidth: 2
			}],

			tooltip: {
				split: true
			},

			plotOptions: {
				series: {
					// Disable error when data points are >1000
					// Average tested around 1200
					turboThreshold: 0
				}
			},

			series: [{
				type: 'candlestick',
				name: this._symbol,
				data: this.ohlcSeries
			}, {
				type: 'column',
				name: 'Volume',
				data: this.volume,
				yAxis: 1,
				colorByPoint: true,
				colors: colors
			}]
		};
	}
}

const Highcharts = require('highcharts/highstock');
import darkUnicaTheme from './highchart-theme';

// Overrides
darkUnicaTheme.chart.backgroundColor.stops = [[0, '#080808'], [1, '#111']];
darkUnicaTheme.chart.style.fontFamily = 'monospace';
darkUnicaTheme.plotOptions.candlestick.lineColor = 'none';

// Apply the theme
Highcharts.setOptions(darkUnicaTheme);

import { ChartModule } from 'angular2-highcharts';
import metadata from 'app.module.metadata';
metadata.declarations.push(ChartComponent);
metadata.imports.push(ChartModule.forRoot(Highcharts));
