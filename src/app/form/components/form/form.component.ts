import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Form, Field } from '../../form.barrel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public form: Form;
  @Input() public model: any;
  @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submit = new EventEmitter<Form>();
  @Output() public reset = new EventEmitter<Form>();

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onFieldChange(fieldModel: any) {
    this.modelChange.emit(this.model);
    window.setTimeout(() => this.form.validate(), 0);
  }

  public onSubmit() {
    this.submit.emit(this.form);
    console.log(`Form has been submitted.`);
  }

  public onReset() {
    this.reset.emit(this.form);
    console.log(`Form has been reset.`);
  }

}
