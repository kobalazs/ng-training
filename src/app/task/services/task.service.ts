import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {

  public create(task: Task): Observable<Task> {
    return this.request<Task>('POST', 'task', task);
  }

  public list(): Observable<Task[]> {
    return this.request<Task[]>('GET', 'task');
  }

}
