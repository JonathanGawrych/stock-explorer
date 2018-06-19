import { NgModule } from '@angular/core';
import { default as metadata, clean } from 'app.module.metadata';

import 'app.component';
import 'app-routing.module';

@NgModule(clean(metadata))
export class AppModule { }

