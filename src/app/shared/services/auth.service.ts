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
    this._loadFromStorage();
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
        this._saveToStorage();
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
    this._saveToStorage();
  }

  private _saveToStorage(): void {
    if (this.token) {
      localStorage.setItem('token', this.token);
    } else {
      localStorage.removeItem('token');
    }
    if (this.user) {
      localStorage.setItem('user', JSON.stringify(this.user));
    } else {
      localStorage.removeItem('user');
    }
  }

  private _loadFromStorage(): void {
    this.token = localStorage.getItem('token');
    let userString: string = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : undefined;
  }

}
