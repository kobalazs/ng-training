import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TaskDto } from '../../dtos/task.dto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  public loading: boolean;
  @Input() public task: TaskDto;
  @Input() public disabled: boolean;
  @Output() public delete = new EventEmitter<TaskDto>();
  @Output() public error = new EventEmitter();

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    //
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


}
