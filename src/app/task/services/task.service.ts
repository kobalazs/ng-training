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

  public listAndRepostitionAllTask(responseConfig: ApiResponseConfig): void {
    //ez tehát most minden listázás előtt, lefuttatsja az újrasorszámozást is
    this._apiService.ResetAllTaskPosition({
      success: ()=>{
        //csak ennyi volt a régi listázás - begin
        this._apiService.request(
          {
            method: 'Get',
            url: 'task'
          },
          responseConfig
        );
        //csak ennyi volt a régi listázás - end

      }
    });
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

  public update(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Patch',
        url: 'task/' + task.id,
        body: task
      },
      responseConfig
    )
  }

  public delete(task: Task, responseConfig: ApiResponseConfig): void {
    this._apiService.request(
      {
        method: 'Delete',
        url: 'task/' + task.id
      },
      responseConfig
    );
  }

}
