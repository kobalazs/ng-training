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
  public now: number;
  @Input() public disabled: boolean;
  @Input() public task: Task;
  @Output() public onError = new EventEmitter();
  @Output() public onDelete = new EventEmitter<Task>();

  private _timekeeper: any;

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.now = this._getGmtTime();
    this._timekeeper = setInterval(() => {
      this.now = this._getGmtTime();
    }, 1000);
  }

  public ngOnDestroy() {
    clearInterval(this._timekeeper);
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

  private _getGmtTime(): number {
    return Date.now() + (new Date()).getTimezoneOffset() * 60 * 1000
  }

}
