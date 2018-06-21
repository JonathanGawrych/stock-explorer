import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import metadata from 'app.module.metadata';
metadata.imports.push(BrowserModule);

import 'app.component';
import 'app-routing.module';

metadata.clean();
@NgModule(metadata)
export class AppModule { }

