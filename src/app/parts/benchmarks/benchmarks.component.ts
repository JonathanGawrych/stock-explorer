import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-benchmarks',
	templateUrl: './benchmarks.component.html',
	styleUrls: ['./benchmarks.component.less']
})
export class BenchmarksComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(BenchmarksComponent);
