import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public form = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
    this.passwordMatchValidator
  );
  public loading = false;

  public constructor(private userService: UserService, private router: Router) {
    //
  }

  public ngOnInit() {
    //
  }

  public register() {
    this.loading = true;
    this.userService.register(this.form.value).subscribe(
      (user: User) => {
        window.alert('Successful registration!');
        this.form.reset();
        this.router.navigate(['/user/login']);
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

  private passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { mismatch: true };
  }

}
