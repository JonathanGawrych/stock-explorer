import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { NavComponent } from 'nav/';
import { FooterComponent } from 'footer/';
import { CompanyComponent } from 'routes/';
import { BenchmarksComponent, ChartComponent, CompanySummaryComponent, LogoComponent, SearchComponent } from 'parts/';
import { AppRoutingModule } from './app-routing.module';

export function highchartsFactory() {
	return require('highcharts/highstock');
}

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent,
		CompanyComponent,
		BenchmarksComponent,
		ChartComponent,
		CompanySummaryComponent,
		LogoComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		ChartModule
	],
	providers: [{
		provide: HighchartsStatic,
		useFactory: highchartsFactory
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }

