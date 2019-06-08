import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserDto } from 'src/app/user/dtos/user.dto';

export interface AuthResponse {
  token: string;
  user: UserDto;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  public user: UserDto;

  constructor(private http: HttpClient) {
    //
  }

  public login(user: UserDto): Observable<AuthResponse> {
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
