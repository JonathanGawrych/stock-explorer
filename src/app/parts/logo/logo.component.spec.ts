import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import metadata from 'app.module.metadata';

describe('LogoComponent', () => {
	let component: LogoComponent;
	let fixture: ComponentFixture<LogoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: metadata.declarations
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});