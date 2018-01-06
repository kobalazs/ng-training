import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Task } from '../';

@Injectable()
export class TaskService {

  public constructor(private _http: HttpClient) {
    //
  }

  public list(): Observable<Task[]> {
    return this._http.get<Task[]>(
      environment.apiEndpoint + '/task'
    );
  }

}
