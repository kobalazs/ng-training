import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [FormComponent, FieldComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
