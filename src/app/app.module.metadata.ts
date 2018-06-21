import { core as Interfaces } from '@angular/compiler';

interface Metadata extends Interfaces.NgModule {
	// removes duplicates from the module metadata
	clean(): void;
}

// create metadata with empty arrays so we just need to push
const metadata: Metadata = {
	providers: [],
	declarations: [],
	imports: [],
	exports: [],
	entryComponents: [],
	bootstrap: [],
	schemas: [],

	clean() {
		this.providers = [...new Set(this.providers)];
		this.declarations = [...new Set(this.declarations)];
		this.imports = [...new Set(this.imports)];
		this.exports = [...new Set(this.exports)];
		this.entryComponents = [...new Set(this.entryComponents)];
		this.bootstrap = [...new Set(this.bootstrap)];
		this.schemas = [...new Set(this.schemas)];
	}
};

export default metadata;


