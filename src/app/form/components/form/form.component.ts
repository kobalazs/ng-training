import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Form, Field } from '../../form.barrel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public form: Form;
  @Output() public submit = new EventEmitter<Form>();
  @Output() public reset = new EventEmitter<Form>();
  @Output() public change = new EventEmitter<Form>();

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onFieldChange(field: Field) {
    console.log(`Field "${field.name}" has changed.`);
    this.change.emit(this.form);
  }

}
