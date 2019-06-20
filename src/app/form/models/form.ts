import { FormGroup } from '@angular/forms';

import { Field } from './field';

export class Form {
  public fields: Field[];
  public onSubmit: () => void;
  public onReset: () => void;
  public validator: (formGroup: FormGroup) => null | any;

}
