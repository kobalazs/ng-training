import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../user.barrel';

@Injectable()
export class UserService {

  public constructor(private _http: Http) {
    //
  }

  public register(user: User): Observable<Response> {
    return this._http.post(
      environment.apiEndpoint + '/user/register',
      user
    );
  }

}
