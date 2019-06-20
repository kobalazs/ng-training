import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Form } from '../../models/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public form: Form;
  @Output() public changeForm = new EventEmitter<Form>();
  @Output() public submitForm = new EventEmitter<Form>();
  @Output() public resetForm = new EventEmitter<Form>();

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

}
