import { Field } from '../form.barrel';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

export class Form { 
    public fields: Field[];
    public onSubmit: () => void;
    public onReset: () => void;
    public validator: (formGroup: FormGroup) => null | any;

    public formGroup: FormGroup;

    public constructor(config: Form) {
        this.fields = config.fields;
        this.onSubmit = config.onSubmit;
        this.onReset = config.onReset;
        this.validator = config.validator;

        this._composeFormGroup();
    }

    private _composeFormGroup() {
        let controls: {[key: string]: AbstractControl} = {};
        for (let field of this.fields) {
            controls[field.name] = field.formControl;
        }
        this.formGroup = new FormGroup(controls, this.validator);
    }
}