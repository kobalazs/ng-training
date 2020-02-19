import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TaskDto } from '../dtos/task.dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public constructor(private http: HttpClient) {
    //
  }

  public create(task: TaskDto): Observable<TaskDto> {
    return this.http.post<TaskDto>(`${environment.apiEndpoint}/task`, task);
  }

  public update(task: TaskDto): Observable<TaskDto> {
    return this.http.patch<TaskDto>(`${environment.apiEndpoint}/task/${task.id}`, task);
  }

  public delete(task: TaskDto): Observable<void> {
    return this.http.delete<void>(`${environment.apiEndpoint}/task/${task.id}`);
  }

  public list(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${environment.apiEndpoint}/task`);
  }
}
