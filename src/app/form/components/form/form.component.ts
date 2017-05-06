import { Component, OnInit, Input, Output } from '@angular/core';

import { Form } from '../../form.barrel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public form: Form;
  @Output() public submit: () => Form;
  @Output() public reset: () => Form;
  @Output() public change: () => Form;

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

}
