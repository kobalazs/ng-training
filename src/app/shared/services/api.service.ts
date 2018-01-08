import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  public constructor(protected _http: HttpClient, protected _authService: AuthService) {
    //
  }

  public request(method: string, url: string, body?: any): Observable<any> {
    const observable = this._http.request(
      method,
      environment.apiEndpoint + '/' + url,
      {
        body: body,
        headers: this._getHeaders()
      }
    );
    const subject = new Subject<any>();
    observable.subscribe(
      response => subject.next(response),
      errorResponse => {
        const errorBody = (errorResponse as HttpErrorResponse).error;
        if (['token_expired', 'token_invalid', 'token_not_provided'].indexOf(errorBody['error']) !== -1) {
          this._authService.logout();
        }
        window.alert(errorBody['error'] ? errorBody['error'] : 'Unexpected system error.');
        subject.error(errorResponse);
      }
    );
    return subject.asObservable();
  }

  private _getHeaders(): {[key: string]: string} {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    if (this._authService.token) {
      headers['Authorization'] = 'Bearer ' + this._authService.token;
    }
    return headers;
  }

}
