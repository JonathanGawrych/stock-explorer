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

export function clean(oldMetadata: Interfaces.NgModule) {
	let metadata: Interfaces.NgModule = {};

	if (oldMetadata.providers.length > 0)
		metadata.providers = [...new Set(oldMetadata.providers)];

	if (oldMetadata.declarations.length > 0)
		metadata.declarations = [...new Set(oldMetadata.declarations)];

	if (oldMetadata.imports.length > 0)
		metadata.imports = [...new Set(oldMetadata.imports)];

	if (oldMetadata.exports.length > 0)
		metadata.exports = [...new Set(oldMetadata.exports)];

	if (oldMetadata.entryComponents.length > 0)
		metadata.entryComponents = [...new Set(oldMetadata.entryComponents)];

	if (oldMetadata.bootstrap.length > 0)
		metadata.bootstrap = [...new Set(oldMetadata.bootstrap)];

	if (oldMetadata.schemas.length > 0)
		metadata.schemas = [...new Set(oldMetadata.schemas)];

	if (oldMetadata.id != null)
		metadata.id = oldMetadata.id;

	return metadata;
}
