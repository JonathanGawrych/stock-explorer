import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Stock } from 'iex-service';
import 'parts/company-summary/';

@Component({
	selector: 'app-company',
	templateUrl: './company.component.html',
	styleUrls: ['./company.component.less']
})
export class CompanyComponent implements OnInit {
	static path = (symbol: string) => ['company', symbol];
	static route: Route = { path: 'company/:symbol', component: CompanyComponent };

	private symbol: string;

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.symbol = params.symbol;
		});
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(CompanyComponent);
