import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AssignmentFormsReactiveComponent } from './assignment-forms-reactive/assignment-forms.component';
import { AssignmentFormTdComponent } from './assignment-forms-td/assignment-form-td.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    AssignmentFormsReactiveComponent,
    AssignmentFormTdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
