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

  public update(task: Task): Observable<Task> {
    return this.request('PATCH', 'task/' + task.id, task);
  }

  public delete(task: Task): Observable<void> {
    return this.request('DELETE', 'task/' + task.id, task);
  }

}
