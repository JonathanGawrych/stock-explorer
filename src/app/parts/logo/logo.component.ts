import { Component } from '@angular/core';

@Component({
	selector: 'app-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.less']
})
export class LogoComponent {}

import metadata from 'app.module.metadata';
metadata.declarations.push(LogoComponent);
