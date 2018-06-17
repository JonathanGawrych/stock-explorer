import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import metadata from 'app.module.metadata';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: metadata.declarations,
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	// it(`should have as title 'app'`, async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app.title).toEqual('Stock Explorer');
	// }));
	// it('should render title in a h1 tag', async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('Welcome to Stock Explorer!');
	// }));
});

