import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../../user/user.barrel';

@Injectable()
export class AuthService {

  constructor(private _http: Http) {
    //
  }

  public login(user: User): Observable<Response> {
    return this._http.post(
      environment.apiEndpoint + '/auth',
      user
    );
  }

}
