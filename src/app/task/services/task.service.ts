import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Task } from '../';
import { ApiService } from '../../shared/';

@Injectable()
export class TaskService extends ApiService {

  public list(): Observable<Task[]> {
    return this.request('GET', 'task');
  }

  public create(task: Task): Observable<Task> {
    return this.request('POST', 'task', task);
  }

}
