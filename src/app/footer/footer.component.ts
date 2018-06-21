import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.less']
})
export class FooterComponent {}

import metadata from 'app.module.metadata';
metadata.declarations.push(FooterComponent);

