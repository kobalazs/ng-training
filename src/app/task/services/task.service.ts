import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public constructor(private http: HttpClient) {
    //
  }

  public list(): Observable<Task[]> {
    return this.http.get<Task[]>(
      environment.apiEndpoint + '/task'
    );
  }

}
