import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { ApiService, ApiResponseConfig } from '../../shared/shared.barrel';
import { Task } from '../task.barrel';

@Injectable()
export class TaskService {

  public constructor(private _apiService: ApiService) {
    //
  }

  public list(responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Get',
        url: 'task'
      },
      responseConfig
    );
  }

  public create(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Post',
        url: 'task',
        body: task
      },
      responseConfig
    )
  }

}
