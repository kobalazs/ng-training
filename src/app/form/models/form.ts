import { Field, FieldConfig } from '../form.barrel';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

export interface FormConfig {
    model: any;
    fields: FieldConfig[];
    validator?: (formGroup: FormGroup) => null | any;
    validatorMessages?: any;
}

export class Form implements FormConfig { 
    public model: any;
    public fields: Field[];
    public onSubmit: () => void;
    public onReset: () => void;
    public validator: (formGroup: FormGroup) => null | any;
    public validatorMessages: any = {};

    public formGroup: FormGroup;
    public errorMessage: string;

    public constructor(config: FormConfig) {
        this.model = config.model;
        this.validator = config.validator;
        this.validatorMessages = config.validatorMessages;

        this.fields = [];
        for (let fieldConfig of config.fields) {
            this.fields.push(new Field(fieldConfig, this.model, this.validatorMessages));
        }

        this._composeFormGroup();
    }

    public reset() {
        this.formGroup.reset();
    }

    public validate() {
        this.formGroup.updateValueAndValidity({ onlySelf: false, emitEvent: false });
        
        if (this.formGroup.pristine || this.formGroup.valid) {
            this.errorMessage = undefined;
        } else {
            let errors: string[] = [];
            for (let errorKey in this.formGroup.errors) {
                let errorMessage = (this.validatorMessages[errorKey] != undefined) ? this.validatorMessages[errorKey] : errorKey;
                errors.push(errorMessage);
            }
            this.errorMessage = errors.join('<br>');
        }
    }

    private _composeFormGroup() {
        let controls: {[key: string]: AbstractControl} = {};
        for (let field of this.fields) {
            controls[field.name] = field.formControl;
        }
        this.formGroup = new FormGroup(controls, this.validator);
    }
}