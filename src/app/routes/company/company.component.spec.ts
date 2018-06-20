import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyComponent } from './company.component';
import metadata from 'app.module.metadata';

describe('CompanyComponent', () => {
	let component: CompanyComponent;
	let fixture: ComponentFixture<CompanyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: metadata.declarations
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
