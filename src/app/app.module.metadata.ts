import { core as Interfaces } from '@angular/compiler';

// create metadata with empty arrays so we just need to push
const metadata: Interfaces.NgModule = {
	providers: [],
	declarations: [],
	imports: [],
	exports: [],
	entryComponents: [],
	bootstrap: [],
	schemas: []
};

export default metadata;

// inject external modules
import { BrowserModule } from '@angular/platform-browser';
metadata.imports.push(BrowserModule);
