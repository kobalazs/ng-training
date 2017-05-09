import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { DynamicFormGroup } from '../form.barrel';

export interface DynamicFormControlConfig {
  label: string;
  type?: string;
  options?: any[];
  formState?: any;
  validator?: ValidatorFn | ValidatorFn[];
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
}

export class DynamicFormControl extends FormControl {
  public label: string;
  public type?: string;
  public options?: any[];

  public parent: DynamicFormGroup;
  public errorMessage: string;

  public constructor(config: DynamicFormControlConfig) {
    super(config.formState, config.validator, config.asyncValidator);
    this.label = config.label;
    this.type = config.type;
    this.options = config.options;
  }

  public validate() {
    this.updateValueAndValidity({ onlySelf: false, emitEvent: false });

    if (!this.dirty || this.valid) {
      this.errorMessage = undefined;
    } else {
      let errors: string[] = [];
      for (let errorKey in this.errors) {
        let errorMessage = (this.parent.validatorMessages[errorKey] != undefined) ? this.parent.validatorMessages[errorKey] : errorKey;
        errors.push(errorMessage);
      }
      this.errorMessage = errors.join('<br>');
    }
  }

}
