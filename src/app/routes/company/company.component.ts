import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Stock } from 'iex-service';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.less']
})
export class CompanyComponent implements OnInit {
	static path = (symbol: string) => ['company', symbol];
	static route: Route = { path: 'company/:symbol', component: CompanyComponent };

	private company: Promise<Stock.Company.Response>;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		const symbol = this.route.snapshot.paramMap.get('symbol');
		this.company = Stock.Company.get(symbol);
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(CompanyComponent);
