import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { User } from '../../user/';

@Injectable()
export class AuthService {

  public user: User;
  public token: string;

  constructor(private _http: HttpClient) {
    //
  }

  public login(user: User): Observable<Response> {
    const observable: Observable<Response> = this._http.post<Response>(
      environment.apiEndpoint + '/auth',
      user
    );
    observable.subscribe(
      (response: Response) => {
        this.user = response['user'];
        this.token = response['token'];
      },
      (error: any) => {
        this.token = undefined;
      }
    );
    return observable;
  }

  public logout(): void {
    this.user = undefined;
    this.token = undefined;
  }

}
