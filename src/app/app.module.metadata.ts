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

export function clean(oldMetadata: Interfaces.NgModule) {
	const newMetadata: Interfaces.NgModule = {};

	if (oldMetadata.providers.length > 0)
		newMetadata.providers = [...new Set(oldMetadata.providers)];

	if (oldMetadata.declarations.length > 0)
		newMetadata.declarations = [...new Set(oldMetadata.declarations)];

	if (oldMetadata.imports.length > 0)
		newMetadata.imports = [...new Set(oldMetadata.imports)];

	if (oldMetadata.exports.length > 0)
		newMetadata.exports = [...new Set(oldMetadata.exports)];

	if (oldMetadata.entryComponents.length > 0)
		newMetadata.entryComponents = [...new Set(oldMetadata.entryComponents)];

	if (oldMetadata.bootstrap.length > 0)
		newMetadata.bootstrap = [...new Set(oldMetadata.bootstrap)];

	if (oldMetadata.schemas.length > 0)
		newMetadata.schemas = [...new Set(oldMetadata.schemas)];

	if (oldMetadata.id != null)
		newMetadata.id = oldMetadata.id;

	return newMetadata;
}

// inject external modules
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-highcharts';
metadata.imports.push(BrowserModule);
metadata.imports.push(ChartModule.forRoot(require('highcharts')));
