import { Component } from '@angular/core';
import 'parts/logo/';
import 'parts/benchmarks/';
import 'parts/search/';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.less']
})
export class NavComponent {}

import metadata from 'app.module.metadata';
metadata.declarations.push(NavComponent);
