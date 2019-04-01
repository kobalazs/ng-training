import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public constructor(protected http: HttpClient, protected authService: AuthService) {
    //
  }

  public request<T>(method: string, url: string, body?: any): Observable<T> {
    const observable = this.http.request<T>(
      method,
      environment.apiEndpoint + '/' + url,
      {
        body,
        headers: this._getHeaders()
      }
    );
    observable.subscribe(
      response => {},
      errorResponse => {
        const errorBody = (errorResponse as HttpErrorResponse).error;
        if (['token_expired', 'token_invalid', 'token_not_provided'].indexOf(errorBody.error) !== -1) {
          this.authService.logout();
        }
        window.alert(errorBody.error ? errorBody.error : 'Unexpected system error.');
      }
    );
    return observable;
  }

  private _getHeaders(): {[key: string]: string} {
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    if (this.authService.token) {
      headers = Object.assign(headers, {
        Authorization: 'Bearer ' + this.authService.token
      });
    }
    return headers;
  }

}
