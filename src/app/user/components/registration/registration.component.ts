import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { User, UserService } from '../../user.barrel';
import { DynamicFormGroup, DynamicFormControl } from '../../../form/form.barrel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public loading: boolean = true;
  public user: User = new User();
  public formGroup: DynamicFormGroup = new DynamicFormGroup({
    controls: {
      email: new DynamicFormControl({
        type: 'text', label: 'Email',
        validator: [Validators.required, Validators.email]
      }),
      name: new DynamicFormControl({
        type: 'text', label: 'Name',
        validator: [Validators.required]
      }),
      password: new DynamicFormControl({
        type: 'password', label: 'Password',
        validator: [Validators.required, Validators.minLength(6)]
      }),
      passwordConfirm: new DynamicFormControl({
        type: 'password', label: 'Password (confirm)',
        validator: [Validators.required, Validators.minLength(6)]
      })
    },
    buttons: {
      submit: {
        label: 'Register'
      },
      reset: {
        label: 'Reset'
      }
    },
    validator: RegistrationComponent.passwordMatchValidator,
    validatorMessages: {
      required: 'This field must be filled!',
      email: 'Invalid e-mail address!',
      minlength: 'This field must be at least 6 characters long!',
      passwordMatchValidator: 'Password and its confirmation should be the same!'
    }
  });

  public constructor(private _userService: UserService) {
    //
  }

  public ngOnInit() {
    this.loading = false;
  }

  public register() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this._userService.register(this.user).subscribe(
      (response: Response) => {
        console.log(response);
        window.alert('Successful registration!');

        this.user = new User();
        this.formGroup.reset();
        this.loading = false;
      },
      (error: any) => {
        console.log(error);
        window.alert('Registration failed.');
        this.loading = false;
      },
      () => {
        //
      }
    );
  }

  public static passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { passwordMatchValidator: true };
  }

}
