import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User = new User();
  public form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    RegistrationComponent.passwordMatchValidator
  );

  public constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public static passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

}
