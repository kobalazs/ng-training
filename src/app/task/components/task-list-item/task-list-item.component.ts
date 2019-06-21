import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { TaskDto } from '../../dtos/task.dto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit, OnDestroy {

  public loading: boolean;
  @Input() public task: TaskDto;
  @Input() public disabled: boolean;
  @Input() public first: boolean;
  @Input() public last: boolean;
  @Output() public move = new EventEmitter<[TaskDto, number]>();
  @Output() public delete = new EventEmitter<TaskDto>();
  @Output() public error = new EventEmitter();
  private timekeeper: number;
  public now: number = Date.now();

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.timekeeper = window.setInterval(() => {
      this.now = Date.now();
    }, 1000);
  }

  public ngOnDestroy() {
    window.clearInterval(this.timekeeper);
  }

  public updateTask(task: TaskDto) {
    this.loading = true;
    this.taskService.update(task).subscribe(
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

  public deleteTask(task: TaskDto) {
    if (!window.confirm(`Are you sure to delete "${task.name}"?`)) {
      return;
    }
    this.loading = true;
    this.taskService.delete(task).subscribe(
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

  public moveUp(task: TaskDto) {
    this.move.emit([task, -1]);
  }

  public moveDown(task: TaskDto) {
    this.move.emit([task, +1]);
  }
}
