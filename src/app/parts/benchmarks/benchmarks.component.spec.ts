import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BenchmarksComponent } from './benchmarks.component';
import metadata from 'app.module.metadata';

describe('BenchmarksComponent', () => {
	let component: BenchmarksComponent;
	let fixture: ComponentFixture<BenchmarksComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: metadata.declarations
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BenchmarksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
