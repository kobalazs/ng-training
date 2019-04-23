import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {

  public tasks: Task[] = [];
  public searchTerm: string = '';

  public load(): Observable<void> {
    const subject = new Subject<void>();
    this.request<Task[]>('GET', 'task').subscribe(
      tasks => {
        if (this.searchTerm) {
          this.tasks = tasks.filter(task => task.name === this.searchTerm);
        } else {
          this.tasks = tasks;
        }
        subject.next();
      },
      error => {
        console.error('Para van!');
        subject.next();
      }
    );
    return subject.asObservable();
  }

  public create(task: Task): Observable<Task> {
    return this.request<Task>('POST', 'task', task);
  }

  public update(task: Task): Observable<Task> {
    return this.request('PATCH', 'task/' + task.id, task);
  }

  public delete(task: Task): Observable<void> {
    return this.request('DELETE', 'task/' + task.id);
  }

}
