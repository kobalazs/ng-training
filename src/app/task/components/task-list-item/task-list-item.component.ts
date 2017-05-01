import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  Task,
  TaskService
} from '../../task.barrel';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  public loading: boolean;
  @Input() public disabled: boolean;
  @Input() public task: Task;
  @Output() public onError = new EventEmitter();
  @Output() public onDelete = new EventEmitter<Task>();

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    //
  }

  public updateTask(task: Task) {
    this.loading = true;
    this._taskService.update(
      task,
      {
        success: updatedTask => task = updatedTask,
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }

  public deleteTask(task: Task) {
    if (!window.confirm(`Are you sure to delete "${task.name}"?`)) {
      return;
    }
    this.loading = true;
    this._taskService.delete(
      task,
      {
        success: response => this.onDelete.emit(task),
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }

}
