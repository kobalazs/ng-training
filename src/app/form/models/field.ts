import { ValidatorFn, FormControl } from '@angular/forms';

export class Field {
    public label: string;
    public type: string;
    public name: string;
    public model: any;
    public defaultValue: any;
    public validators: ValidatorFn[] = [];
    public options: any[];

    public formControl: FormControl;

    public constructor(config: Field) {
        this.label = config.label;
        this.type = config.type;
        this.name = config.name;
        this.model = config.model;
        this.defaultValue = config.defaultValue;
        this.validators = config.validators;
        this.options = config.options;

        this._composeFormControl();
    }

    private _composeFormControl() {
        this.formControl = new FormControl(this.defaultValue, this.validators);
    }
}