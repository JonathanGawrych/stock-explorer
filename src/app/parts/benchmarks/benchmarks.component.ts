import { Component, OnInit } from '@angular/core';
import { Stock } from 'iex-service';

@Component({
	selector: 'app-benchmarks',
	templateUrl: './benchmarks.component.html',
	styleUrls: ['./benchmarks.component.less']
})
export class BenchmarksComponent implements OnInit {
	SYMBOLS = [
		'DIA', // Dow Jones Industrial Average
		'SPY', // S&P 500 Index
		'QQQ', // NASDAQ-100
	];

	SHORT_NAMES = {
		'DIA': 'Dow Jones',
		'SPY': 'S&P 500',
		'QQQ': 'NASDAQ'
	};

	stats: {[symbol: string]: Promise<Stock.Previous.Response>}[];

	ngOnInit() {
		this.stats = Object.assign({}, ...this.SYMBOLS.map(
			symbol => ({ [symbol]: Stock.Previous.get(symbol) })
		));
	}
}
