import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';
import metadata from 'app.module.metadata';

describe('ChartComponent', () => {
	let component: ChartComponent;
	let fixture: ComponentFixture<ChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: metadata.declarations
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
