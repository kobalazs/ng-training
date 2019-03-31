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

  constructor(private http: HttpClient) {
    //
  }

  public login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      environment.apiEndpoint + '/auth',
      user
    );
  }

}
