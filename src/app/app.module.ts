import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { default as metadata, clean } from 'app.module.metadata';
metadata.imports.push(BrowserModule);

import 'app.component';
import 'app-routing.module';

@NgModule(clean(metadata))
export class AppModule { }

