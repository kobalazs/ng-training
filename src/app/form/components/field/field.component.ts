import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../form.barrel';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() public field: Field;
  @Input() public formGroup: FormGroup;
  @Output() public change = new EventEmitter<Field>();

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onModelChange(model: any) {
    this.change.emit(this.field);
    window.setTimeout(() => this.field.validate(), 0);
  }

}
