import { Routes } from '@angular/router';

import { CompanyComponent } from './company/';

export const routes: Routes = [
	CompanyComponent.route,
	{ path: '', redirectTo: CompanyComponent.path('SPY').join('/'), pathMatch: 'full' }
];
