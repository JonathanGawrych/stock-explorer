import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(SearchComponent);
