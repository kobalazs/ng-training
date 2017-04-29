import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Task } from '../task.barrel';

@Injectable()
export class TaskService {

  public constructor(private _http: Http) {
    //
  }

  public list(): Observable<Response> {
    return this._http.get(
      environment.apiEndpoint + '/task'
    );
  }

}
