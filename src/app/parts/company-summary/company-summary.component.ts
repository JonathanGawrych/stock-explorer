import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-company-summary',
	templateUrl: './company-summary.component.html',
	styleUrls: ['./company-summary.component.less']
})
export class CompanySummaryComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(CompanySummaryComponent);

