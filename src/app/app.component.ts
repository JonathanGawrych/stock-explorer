import { Component } from '@angular/core';
import 'nav/';
import 'footer/';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'Stock Explorer';
}

import metadata from 'app.module.metadata';
metadata.declarations.push(AppComponent);
metadata.bootstrap.push(AppComponent);
