import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) {
    this.loadFromStorage();
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
        this.saveToStorage();
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
