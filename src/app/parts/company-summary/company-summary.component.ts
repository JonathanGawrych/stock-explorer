import { Component, Input } from '@angular/core';
import { Stock } from 'iex-service';

@Component({
	selector: 'app-company-summary',
	templateUrl: './company-summary.component.html',
	styleUrls: ['./company-summary.component.less']
})
export class CompanySummaryComponent {
	private company: Promise<Stock.Company.Response>;

	@Input() set symbol(value: string) {
		this.company = Stock.Company.get(value);
	}

	issueTypeToReadable(issueType: Stock.Company.IssueType) {
		switch (issueType) {
		case 'ad': return 'American Depository Receipt (ADR’s)';
		case 're': return 'Real Estate Investment Trust (REIT’s)';
		case 'ce': return 'Closed end fund (Stock and Bond Fund)';
		case 'si': return 'Secondary Issue';
		case 'lp': return 'Limited Partnerships';
		case 'cs': return 'Common Stock';
		case 'et': return 'Exchange Traded Fund (ETF)';
		default: return null;
		}
	}
}

import metadata from 'app.module.metadata';
metadata.declarations.push(CompanySummaryComponent);
