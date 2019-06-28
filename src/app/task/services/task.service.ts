import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { TaskDto } from '../dtos/task.dto';
import { HttpVerb } from 'src/app/shared/interfaces/http-verb.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {

  public create(task: TaskDto): Observable<TaskDto> {
    return this.request<TaskDto>(HttpVerb.post, 'task', task);
  }

  public update(task: TaskDto): Observable<TaskDto> {
    return this.request(HttpVerb.patch, `task/${task.id}`, task);
  }

  public delete(task: TaskDto): Observable<void> {
    return this.request(HttpVerb.delete, `task/${task.id}`);
  }

  public list(): Observable<TaskDto[]> {
    return this.request<TaskDto[]>(HttpVerb.get, 'task');
  }

}
