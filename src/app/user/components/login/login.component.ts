import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService, AuthResponse } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  public constructor(private authService: AuthService) {
    //
  }

  public ngOnInit() {
    //
  }

  public login() {
    this.authService.login(this.form.value).subscribe(
      (response: AuthResponse) => {
        console.log(response);
        window.alert('Successful login!');
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
