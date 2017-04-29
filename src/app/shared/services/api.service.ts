import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';

import { environment } from '../../../environments/environment';
import { AuthService } from '../shared.barrel';
import { User } from '../../user/user.barrel';

export interface ApiRequestConfig {
    method: string;
    url: string;
    body?: any;
}

export interface ApiResponseConfig {
    success?: (responseJson: any) => void;
    error?: (responseJson: any) => void;
    finally?: () => void;
}

@Injectable()
export class ApiService {

  public constructor(protected _http: Http, protected _authService: AuthService) {
    //
  }
  
  public request(requestConfig: ApiRequestConfig, responseConfig: ApiResponseConfig): void {
    this._http.request(
      this._getRequestUrl(requestConfig),
      this._getRequestOptions(requestConfig)
    ).subscribe(
      response => {
        let responseJson = response.json();
        if (responseConfig.success != undefined) {
          responseConfig.success(responseJson);
        }
        if (responseConfig.finally != undefined) {
          responseConfig.finally();
        }
      },
      error => {
        let responseJson = error.json();
        if (['token_expired', 'token_invalid', 'token_not_provided'].indexOf(responseJson['error']) !== -1) {
          this._authService.logout();
          return;
        }
        if (responseConfig.error != undefined) {
          responseConfig.error(responseJson);
        } else {
          window.alert(responseJson['error'] ? responseJson['error'] : 'Unexpected system error.');
          console.error(responseJson);
        }
        if (responseConfig.finally != undefined) {
          responseConfig.finally();
        }
      }
    );
  }

  private _getRequestUrl(requestConfig: ApiRequestConfig) {
    return environment.apiEndpoint + '/' + requestConfig.url.replace(/^\/+|\/+$/g, '');
  }
  
  private _getRequestOptions(requestConfig: ApiRequestConfig) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    if (this._authService.token) {
      headers.append('Authorization', 'Bearer ' + this._authService.token);
    }
    let body = (requestConfig.body == undefined) ? '' : JSON.stringify(requestConfig.body);
    return new RequestOptions({
      method: RequestMethod[requestConfig.method],
      headers: headers,
      body: body,
      responseType: ResponseContentType.Json
    });
  }
}