import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: User = new User;
  public form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    RegistrationComponent.passwordMatchValidator
  );

  public static passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { 'mismatch': true };
  }

  public constructor(private _userService: UserService) {
    //
  }

  public ngOnInit() {
    //
  }

  public register() {
    this._userService.register(this.user).subscribe(
      (response: Response) => {
        console.log(response);
        window.alert('Successful registration!');

        this.user = new User();
        this.form.reset();
      },
      (error: any) => {
        console.log(error);
        window.alert('Registration failed.');
      },
      () => {
        //
      }
    );
  }

}
