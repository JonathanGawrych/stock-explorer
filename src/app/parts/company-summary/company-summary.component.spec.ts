import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { CompanySummaryComponent } from './company-summary.component';

describe('CompanySummaryComponent', () => {
	let component: CompanySummaryComponent;
	let fixture: ComponentFixture<CompanySummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterModule.forRoot([])],
			declarations: [CompanySummaryComponent],
			providers: [{provide: APP_BASE_HREF, useValue : '/' }]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CompanySummaryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
