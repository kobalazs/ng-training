import { Component, OnInit } from '@angular/core';

import { Form } from '../../models/form';
import { Field } from '../../models/field';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public testForm: Form;

  constructor() {
    const testField = new Field();
    testField.label = 'Test Field';
    testField.name = 'test_field';
    testField.model = 'test value';

    this.testForm = new Form();
    this.testForm.fields = [
      testField
    ];
  }

  ngOnInit() {
  }

}
