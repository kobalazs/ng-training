import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private http: HttpClient) {
    //
  }

  public register(user: UserDto): Observable<UserDto> {
    return this.http.post<UserDto>(
      environment.apiEndpoint + '/user/register',
      user
    );
  }
}
