import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { User, UserService } from '../../user.barrel';
import { Form } from '../../../form/form.barrel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public loading: boolean = true;
  public user: User = new User();
  public form = new Form({
    model: this.user,
    fields: [
      {
        name: 'email', type: 'text', label: 'Email',
        validators: [Validators.required, Validators.email]
      },
      {
        name: 'name', type: 'text', label: 'Name',
        validators: [Validators.required]
      },
      {
        name: 'password', type: 'password', label: 'Password',
        validators: [Validators.required, Validators.minLength(6)]
      },
      {
        name: 'passwordConfirm', type: 'password', label: 'Password (confirm)',
        validators: [Validators.required, Validators.minLength(6)]
      }
    ],
    validator: RegistrationComponent.passwordMatchValidator,
    onSubmit: () => this.register()
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
        this.form.reset();
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
    return g.get('password').value === g.get('passwordConfirm').value ? null : {'mismatch': true};
  }

}
