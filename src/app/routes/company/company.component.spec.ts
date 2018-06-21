import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
const Highcharts = require('highcharts/highstock');
import { ChartModule } from 'angular2-highcharts';
import { CompanyComponent } from './company.component';
import { CompanySummaryComponent, ChartComponent } from 'parts';

describe('CompanyComponent', () => {
	let component: CompanyComponent;
	let fixture: ComponentFixture<CompanyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				ChartModule.forRoot(Highcharts),
				RouterTestingModule
			],
			declarations: [CompanyComponent, CompanySummaryComponent, ChartComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CompanyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
