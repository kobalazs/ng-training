import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormComponent, FieldComponent]
})
export class FormModule { }
