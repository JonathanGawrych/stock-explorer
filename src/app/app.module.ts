import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const Highcharts = require('highcharts/highstock');
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { NavComponent } from 'nav/';
import { FooterComponent } from 'footer/';
import { CompanyComponent } from 'routes/';
import { BenchmarksComponent, ChartComponent, CompanySummaryComponent, LogoComponent, SearchComponent } from 'parts/';
import { AppRoutingModule } from './app-routing.module';

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
		ChartModule.forRoot(Highcharts)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

