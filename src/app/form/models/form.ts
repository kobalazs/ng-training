import { Field } from '../form.barrel';
import { FormGroup } from '@angular/forms';

export class Form { 
    public fields: Field[];
    public onSubmit: () => void;
    public onReset: () => void;
    public validator: (formGroup: FormGroup) => null | any;
}