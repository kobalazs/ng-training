import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  constructor(private http: HttpClient, private router: Router) {
    this.loadFromStorage();
  }

  public login(user: UserDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      environment.apiEndpoint + '/auth',
      user
    ).pipe(
      tap(
        (authResponse: AuthResponse): void => {
          this.token = authResponse.token;
          this.user = authResponse.user;
          this.saveToStorage();
        },
        (): void => {
          this.logout();
        }
      )
    );
  }

  public logout(): void {
    this.token = undefined;
    this.user = undefined;
    this.saveToStorage();
    this.router.navigate(['/']);
  }

  private saveToStorage(): void {
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

  private loadFromStorage(): void {
    this.token = localStorage.getItem('token');
    const userString: string = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : undefined;
  }

}
