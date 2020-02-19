import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  public constructor(private authService: AuthService, private router: Router) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public login() {
    this.authService.login(this.form.value).subscribe(
      (response: AuthResponse) => {
        this.form.reset();
        this.router.navigate(['/']);
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
