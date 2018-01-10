import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit, OnDestroy {

  public loading: boolean;
  public now: number;
  @Input() public task: Task;
  @Input() public disabled: boolean;
  @Output() public error = new EventEmitter();
  @Output() public delete = new EventEmitter<Task>();

  private  _timekeeper: number;

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.now = this._getGmtTime();
    this._timekeeper = window.setInterval(() => {
      this.now = this._getGmtTime();
    }, 1000);
  }

  public ngOnDestroy() {
    window.clearInterval(this._timekeeper);
  }

  private _getGmtTime() {
    return Date.now() + (new Date()).getTimezoneOffset() * 60 * 1000;
  }

  public updateTask(task: Task) {
    this.loading = true;
    this._taskService.update(task).subscribe(
      updatedTask => {
        task = updatedTask;
        this.loading = false;
      },
      error => {
        this.error.emit();
        this.loading = false;
      }
    );
  }

  public deleteTask(task: Task) {
    if (!window.confirm(`Are you sure to delete "${task.name}"?`)) {
      return;
    }
    this.loading = true;
    this._taskService.delete(task).subscribe(
      () => {
        this.delete.emit(task);
        this.loading = false;
      },
      error => {
        this.error.emit();
        this.loading = false;
      }
    );
  }

}
