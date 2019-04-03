import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { TaskEditorModalComponent } from '../task-editor-modal/task-editor-modal.component';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit, OnDestroy {

  public loading: boolean;
  @Input() public task: Task;
  @Input() public disabled: boolean;
  @Output() public delete = new EventEmitter<Task>();
  @Output() public error = new EventEmitter();
  private timekeeper: number;
  public now: number = Date.now();

  public constructor(private taskService: TaskService, public dialog: MatDialog) {
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

  public openEditor(task: Task): void {
    const dialogRef = this.dialog.open(
      TaskEditorModalComponent,
      {
        data: Object.assign({}, task),
        width: '250px'
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.task = result;
        this.updateTask(result);
      }
    });
  }

  public updateTask(task: Task) {
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

  public deleteTask(task: Task) {
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

}
