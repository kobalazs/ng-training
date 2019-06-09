import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { TaskDto } from '../../dtos/task.dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public loading: boolean;
  public tasks: TaskDto[] = [];

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public addNewTask() {
    this.loading = true;
    const task = new TaskDto();
    task.name = 'New Task';
    this.taskService.create(task).subscribe(
      () => this.loadTasks(),
      () => this.loading = false
    );
  }

  private loadTasks() {
    this.loading = true;
    this.taskService.list().subscribe(
      tasks => {
        this.tasks = tasks;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}
