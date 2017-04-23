import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { User, UserService } from '../../user.barrel';
import { AuthService } from '../../../shared/shared.barrel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  public constructor(private _authService: AuthService) {
    //
  }

  public ngOnInit() {
    //
  }

  public login() {
    this._authService.login(this.user).subscribe(
      (response: Response) => {
        console.log(response);
        window.alert('Successful login!');
        
        this.user = new User();
        this.form.reset();
      },
      (error: any) => {
        console.log(error);
        window.alert('Login failed.');
      },
      () => {
        //
      }
    );
  }

}
