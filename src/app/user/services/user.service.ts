import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { User } from '../';

@Injectable()
export class UserService {

  public constructor(private _http: HttpClient) {
    //
  }

  public register(user: User): Observable<Response> {
    return this._http.post<Response>(
      environment.apiEndpoint + '/user/register',
      user
    );
  }

}
