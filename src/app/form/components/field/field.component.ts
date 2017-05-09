import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DynamicFormControl } from '../../form.barrel';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() public name: string;
  @Input() public control: DynamicFormControl;
  @Input() public model: any;
  @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onModelChange(model: any) {
    this.modelChange.emit(this.model);
    window.setTimeout(() => this.control.validate(), 0);
  }

}
