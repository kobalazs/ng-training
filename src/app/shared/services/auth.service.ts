import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../../user/user.barrel';

@Injectable()
export class AuthService {

  public user: User;
  public token: string;

  constructor(private _http: Http) {
    //
  }

  public login(user: User): Observable<Response> {
    let observable: Observable<Response> = this._http.post(
      environment.apiEndpoint + '/auth',
      user
    );

    observable.subscribe(
      (response: Response) => {
        this.user = response.json()['user'];
        this.token = response.json()['token'];
      },
      (error: any) => {
        this.token = undefined;
      }
    )

    return observable;
  }

  public logout(): void {
    this.user = undefined;
    this.token = undefined;
  }

}
