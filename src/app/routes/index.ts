import { Routes } from '@angular/router';

import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
	{ path: 'company/:symbol', component: CompanyComponent }
];
