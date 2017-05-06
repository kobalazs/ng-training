import { ValidatorFn } from '@angular/forms';

export class Field {
    public label: string;
    public type: string;
    public name: string;
    public model: any;
    public validators: ValidatorFn[] = [];
    public options: any[];
}