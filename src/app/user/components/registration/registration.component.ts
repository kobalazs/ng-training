import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  public constructor() {
    //
  }
     
  public ngOnInit(): void {
    //
  }
     
  private passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ? null : { mismatch: true };
  }
  
}
