import { Component, OnInit } from '@angular/core';

import { UserDto } from '../../dtos/user.dto';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: UserDto = new UserDto();

  constructor() { }

  ngOnInit() {
  }

}
