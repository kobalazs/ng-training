import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { TaskDto } from '../dtos/task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {

  public create(task: TaskDto): Observable<TaskDto> {
    return this.request<TaskDto>('POST', 'task', task);
  }

  public list(): Observable<TaskDto[]> {
    return this.request<TaskDto[]>('GET', 'task');
  }

}
