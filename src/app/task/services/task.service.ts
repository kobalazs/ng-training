import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TaskDto } from '../dtos/task.dto';

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
