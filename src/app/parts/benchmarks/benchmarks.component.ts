import { Component, OnInit } from '@angular/core';
import { Stock } from 'iex-service';

@Component({
	selector: 'app-benchmarks',
	templateUrl: './benchmarks.component.html',
	styleUrls: ['./benchmarks.component.less']
})
export class BenchmarksComponent implements OnInit {
	private static SYMBOLS = [
		'DIA', // Dow Jones Industrial Average
		'SPY', // S&P 500 Index
		'QQQ', // NASDAQ-100
	];

	private stats: Promise<Stock.Previous.Response[]>;

	ngOnInit() {
		this.stats = Promise.all(BenchmarksComponent.SYMBOLS.map(Stock.Previous.get));
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(BenchmarksComponent);
