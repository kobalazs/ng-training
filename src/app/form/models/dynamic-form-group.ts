import { FormGroup, FormControl, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { DynamicFormControl } from '../form.barrel';

export interface ButtonConfig {
  label: string;
}

export interface DynamicFormGroupConfig {
  validatorMessages?: any;
  controls: { [key: string]: DynamicFormControl };
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
  buttons?: { [key: string]: ButtonConfig }
}

export class DynamicFormGroup extends FormGroup {
  public validatorMessages: { [error: string]: string } = {};
  public buttons: { [key: string]: ButtonConfig } = {};
  public errorMessage: string;

  public constructor(config: DynamicFormGroupConfig) {
    super(config.controls, config.validator, config.asyncValidator);
    this.validatorMessages = config.validatorMessages;
    this.buttons = config.buttons;
  };

  public controlNames(): string[] {
    return Object.keys(this.controls);
  }

  public validate() {
    this.updateValueAndValidity({ onlySelf: false, emitEvent: false });

    if (this.pristine || this.valid) {
      this.errorMessage = undefined;
    } else {
      let errors: string[] = [];
      for (let errorKey in this.errors) {
        let errorMessage = (this.validatorMessages[errorKey] != undefined) ? this.validatorMessages[errorKey] : errorKey;
        errors.push(errorMessage);
      }
      this.errorMessage = errors.join('<br>');
    }
  }

}
