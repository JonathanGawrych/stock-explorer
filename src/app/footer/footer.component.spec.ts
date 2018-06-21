import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import metadata from 'app.module.metadata';

describe('FooterComponent', () => {
	let component: FooterComponent;
	let fixture: ComponentFixture<FooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: metadata.declarations
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
