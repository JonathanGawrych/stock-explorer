import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'iex-service';

@Component({
	selector: 'app-company-summary',
	templateUrl: './company-summary.component.html',
	styleUrls: ['./company-summary.component.less']
})
export class CompanySummaryComponent implements OnInit {
	private company: Promise<Stock.Company.Response>;

	@Input() set symbol(value: string) {
		this.company = Stock.Company.get(value);
	}

	constructor() { }

	ngOnInit() {
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(CompanySummaryComponent);
