import { Component, Input } from '@angular/core';
import { Stock } from 'iex-service';

interface HighchartOHLCSeries {
	[0]: number; // timestamp
	[1]: number; // open
	[2]: number; // high
	[3]: number; // low
	[4]: number; // close
}

interface HighchartVolume {
	[0]: number; // timestamp
	[1]: number; // volume
}

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.less']
})
export class ChartComponent {
	private options: Object;
	private _symbol: string;
	private ohlcSeries: HighchartOHLCSeries[]
	private volume: HighchartVolume[];

	@Input() set symbol(value: string) {
		this._symbol = value;
		Stock.Chart.get(this._symbol, '5y')
		.then((chartData: Stock.Chart.MultiDay.Response[]) => {
			this.ohlcSeries = ChartComponent.iexToHighchartOHLC(chartData);
			this.volume = ChartComponent.iexToHighchartVolume(chartData);
			this.updateOptions();
		});
	}

	/**
	 * IEX has two different date formats depending on 1d or not 1d
	 * Convert these to a timestamp where the exchanges are (EST)
	 */
	static iexDateToTimestamp(iexDate: string, iexMinute?: string)
	{
		// convert from "YYYYMMDD", "HH:MM" to timestamp
		if (iexMinute != null)
			return Date.parse(iexDate.substring(0,4) + '-'
							+ iexDate.substring(4,6) + '-'
							+ iexDate.substring(6,8) + ' '
							+ iexMinute + ' EST');

		// convert from "YYYY-MM-DD"
		return Date.parse(iexDate + ' EST');
	}

	static iexToHighchartOHLC(iex: (Stock.Chart.MultiDay.Response | Stock.Chart.OneDay.Response)[]) : HighchartOHLCSeries[]
	{
		return iex.map((response): HighchartOHLCSeries => [
			ChartComponent.iexDateToTimestamp(response.date, response.minute),
			response.open,
			response.high,
			response.low,
			response.close
		]);
	}

	static iexToHighchartVolume(iex: Stock.Chart.MultiDay.Response[]) : HighchartVolume[]
	{
		return iex.map((response): HighchartVolume => [
			ChartComponent.iexDateToTimestamp(response.date, response.minute),
			response.volume
		]);
	}

	updateOptions() {
		this.options = {

			rangeSelector: {
				selected: 1
			},

			title: {
				text: this.symbol
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

			series: [{
				type: 'candlestick',
				name: this.symbol,
				data: this.ohlcSeries
			},{
				type: 'column',
				name: 'Volume',
				data: this.volume,
				yAxis: 1,
			}]
		};
	}
}

import { ChartModule } from 'angular2-highcharts';
import metadata from 'app.module.metadata';
metadata.declarations.push(ChartComponent);
metadata.imports.push(ChartModule.forRoot(require('highcharts/highstock')));
