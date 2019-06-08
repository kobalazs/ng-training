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

  constructor(private http: HttpClient) {
    //
  }

  public login(user: UserDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      environment.apiEndpoint + '/auth',
      user
    );
  }

}
