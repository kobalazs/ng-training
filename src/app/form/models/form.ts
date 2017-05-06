import { Field, FieldConfig } from '../form.barrel';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

export interface FormConfig {
    model: any;
    fields: FieldConfig[];
    validator?: (formGroup: FormGroup) => null | any;
}

export class Form implements FormConfig { 
    public model: any;
    public fields: Field[];
    public onSubmit: () => void;
    public onReset: () => void;
    public validator: (formGroup: FormGroup) => null | any;

    public formGroup: FormGroup;

    public constructor(config: FormConfig) {
        this.model = config.model;
        this.fields = [];
        for (let fieldConfig of config.fields) {
            this.fields.push(new Field(fieldConfig, this.model));
        }
        this.validator = config.validator;

        this._composeFormGroup();
    }

    public reset() {
        this.formGroup.reset();
    }

    private _composeFormGroup() {
        let controls: {[key: string]: AbstractControl} = {};
        for (let field of this.fields) {
            controls[field.name] = field.formControl;
        }
        this.formGroup = new FormGroup(controls, this.validator);
    }
}