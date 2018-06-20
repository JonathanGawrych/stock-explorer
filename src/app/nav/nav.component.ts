import { Component, OnInit } from '@angular/core';
import 'parts/logo/';
import 'parts/benchmarks/';
import 'parts/search/';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}

import metadata from 'app.module.metadata';
metadata.declarations.push(NavComponent);
