import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';

import { environment } from '../../../environments/environment';
import { AuthService } from '../shared.barrel';
import { User } from '../../user/user.barrel';

import { Task } from "../../task/models/task";
import { Observable } from 'rxjs';

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
    //this.ResetAllTaskPosition();
  }
  
  public ResetAllTaskPosition(responseConfig: ApiResponseConfig):void {
  
    let rc: ApiRequestConfig = {method: 'Get', url: 'task' };
    let ob: Observable<Response> = this._http.request(
      this._getRequestUrl(rc),
      this._getRequestOptions(rc)
    );
    
    let t : Task[];
    let pos=0; //todo: most csak úgy működik, ha nullától sorszámozunk, mert így az indexe megygezik a tömbbéli indexével ...
    let tombDarab=0;
    let sikerDarab=0;
    ob.map(
      (response:Response) => {
        t = <Task[]>response.json();
      }
    ).subscribe(()=>{
      //console.log(t+'*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!');

      tombDarab=t.length;
      t.sort(function(a, b) {
        
        if (a.name > b.name) {
           return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;        
      });

      for(var i=0; i<t.length; i++){
        let elem=t[i];
      //t.forEach(elem => {
        elem.position=pos++;
        let rc2: ApiRequestConfig = {method: 'Patch', url: 'task/'+elem.id, body: elem };
        let ob2: Observable<Response> = this._http.request(
          this._getRequestUrl(rc2),
          this._getRequestOptions(rc2)
        );

        ob2.subscribe(
          (success)=>{
              //console.log('update ok: '+elem.id + '/'+ success)
              sikerDarab++;
              if(sikerDarab==tombDarab){
                if(responseConfig.success){
                  responseConfig.success('any');
                }
                if (responseConfig.finally != undefined) {
                  responseConfig.finally();
                }
                //console.log('tyxtyxtyxtyxtyxtyxtyxtyxtyxtyxtyxtyxtyxtyxtyx :)');
              }
          },
          (error)=>{
            //console.log('update error: '+elem.id);
            if(responseConfig.error){
              responseConfig.error('update error: '+elem.id);
            }
            if (responseConfig.finally != undefined) {
              responseConfig.finally();
            }
          },
        );
      }
    });
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