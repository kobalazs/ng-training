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
  @Output() public error = new EventEmitter();

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit(): void {
    //
  }

  public updateTask(task: TaskDto) {
    this.loading = true;
    this.taskService.update(task).subscribe(
      updatedTask => {
        task = updatedTask;
        this.loading = false;
      },
      () => {
        this.error.emit();
        this.loading = false;
      }
    );
  }

}
