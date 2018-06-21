import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from 'routes/company';

@NgModule({
	imports: [RouterModule.forRoot([
		{ path: 'company/:symbol', component: CompanyComponent },
		{ path: '', redirectTo: 'company/SPY', pathMatch: 'full' }
	])],
	exports: [RouterModule]
})
export class AppRoutingModule { }
