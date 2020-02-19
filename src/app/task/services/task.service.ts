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

  public list(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(
      environment.apiEndpoint + '/task'
    );
  }
}
