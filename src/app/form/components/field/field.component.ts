import { Component, OnInit, Input, Output } from '@angular/core';

import { Field } from '../../form.barrel';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() public field: Field;
  @Output() public change: () => Field;

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

}
