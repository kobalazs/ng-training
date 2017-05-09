import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DynamicFormGroup, DynamicFormControl } from '../../form.barrel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() public formGroup: DynamicFormGroup;
  @Input() public model: any;
  @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submit = new EventEmitter();
  @Output() public reset = new EventEmitter();

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onFieldChange(fieldModel: any) {
    this.modelChange.emit(this.model);
    window.setTimeout(() => this.formGroup.validate(), 0);
  }

  public onSubmit() {
    this.submit.emit();
  }

  public onReset() {
    this.reset.emit();
  }

}
