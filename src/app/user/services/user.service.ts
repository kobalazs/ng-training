import { Injectable } from '@angular/core';

import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    //
  }

  public register(userDto: UserDto) {
    console.log('Register user:', userDto);
  }

}
