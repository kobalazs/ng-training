import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public constructor(private http: HttpClient) {
    //
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(
      environment.apiEndpoint + '/user/register',
      user
    );
  }

}
