import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from '../../models/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() public field: Field;
  @Output() public fieldChange = new EventEmitter<Field>();

  constructor() {
    //
  }

  ngOnInit() {
    //
  }

}
