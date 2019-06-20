import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [FormComponent, FieldComponent, TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TestComponent,
  ],
})
export class FormModule { }
