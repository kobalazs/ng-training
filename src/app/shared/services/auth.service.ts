import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { User } from '../../user/';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) {
    //
  }

  public login(user: User): Observable<Response> {
    return this._http.post<Response>(
      environment.apiEndpoint + '/auth',
      user
    );
  }

}
