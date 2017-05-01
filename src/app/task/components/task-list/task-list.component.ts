import { Component, OnInit } from '@angular/core';

import {
  Task,
  TaskService
} from '../../task.barrel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public loading: boolean = true;

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public loadTasks() {
    this.loading = true;
    this._taskService.list({
      success: response => this.tasks = response,
      finally: () => this.loading = false
    });
  }

  public addNewTask() {
    this.loading = true;
    let task = new Task();
    task.name = 'New Task';
    this._taskService.create(
      task,
      {
        finally: () => this.loadTasks()
      }
    )
  }

  public removeTask(task: Task) {
    let index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
