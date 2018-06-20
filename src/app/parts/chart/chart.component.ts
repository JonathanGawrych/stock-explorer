import { Component } from '@angular/core';

@Component({
	selector: 'app-chart',
	templateUrl: './chart.component.html',
	styleUrls: ['./chart.component.less']
})
export class ChartComponent {}

import metadata from 'app.module.metadata';
metadata.declarations.push(ChartComponent);
