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

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this._loadTasks();
  }

  private _loadTasks() {
    this._taskService.list({
      success: response => this.tasks = response
    });
  }

  public addNewTask() {
    let task = new Task();
    task.name = 'New Task';
    this._taskService.create(
      task,
      {
        finally: () => this._loadTasks()
      }
    )
  }

  public updateTask(task: Task) {
    this._taskService.update(
      task,
      {
        success: updatedTask => task = updatedTask,
        error: error => this._loadTasks()
      }
    )
  }

}
