import { async, ComponentFixture, TestBed } from '@angular/core/testing';
const Highcharts = require('highcharts/highstock');
import { ChartModule } from 'angular2-highcharts';
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
	let component: ChartComponent;
	let fixture: ComponentFixture<ChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ChartModule.forRoot(Highcharts)],
			declarations: [ChartComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
