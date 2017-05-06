import { ValidatorFn, FormControl } from '@angular/forms';

export interface FieldConfig {
    label: string;
    type?: string;
    name: string;
    defaultValue?: any;
    validators?: ValidatorFn[];
    options?: any[];
}

export class Field implements FieldConfig {
    public label: string;
    public type: string;
    public name: string;
    public model: any;
    public defaultValue: any;
    public validators: ValidatorFn[] = [];
    public options: any[];

    public formControl: FormControl;
    public errorMessage: string;

    public constructor(config: FieldConfig, model: any) {
        this.label = config.label;
        this.type = config.type;
        this.name = config.name;
        this.model = model;
        this.defaultValue = config.defaultValue;
        this.validators = config.validators;
        this.options = config.options;

        this._composeFormControl();
    }

    private _composeFormControl() {
        this.formControl = new FormControl(this.defaultValue, this.validators);
    }

    public validate() {
        this.formControl.updateValueAndValidity({ onlySelf: false, emitEvent: false });
        
        if (!this.formControl.dirty || this.formControl.valid) {
            this.errorMessage = undefined;
        } else {
            let errors: string[] = [];
            for (const errorKey in this.formControl.errors) {
                errors.push(errorKey);
            }
            this.errorMessage = errors.join('<br>');
        }
    }
}