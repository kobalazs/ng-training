import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/models/user';

export interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public user: User;

  constructor(private http: HttpClient) {
    //
  }

  public login(user: User): Observable<AuthResponse> {
    const observable: Observable<AuthResponse> = this.http.post<AuthResponse>(
      environment.apiEndpoint + '/auth',
      user
    );
    observable.subscribe(
      (authResponse: AuthResponse) => {
        this.token = authResponse.token;
        this.user = authResponse.user;
      },
      (error: any) => {
        this.logout();
      }
    );
    return observable;
  }

  public logout(): void {
    this.token = undefined;
    this.user = undefined;
  }

}
