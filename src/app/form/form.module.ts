import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent, FieldComponent } from './form.barrel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ],
  declarations: [
    FormComponent,
    FieldComponent
  ]
})
export class FormModule { }
