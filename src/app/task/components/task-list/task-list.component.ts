import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public loading: boolean;
  public tasks: Task[] = [];

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public addNewTask() {
    this.loading = true;
    const task = new Task();
    task.name = 'New Task';
    this.taskService.create(task).subscribe(
      () => this.loadTasks(),
      () => this.loading = false
    );
  }

  public updateTask(task: Task) {
    this.loading = true;
    this.taskService.update(task).subscribe(
      updatedTask => {
        task = updatedTask;
        this.loading = false;
      },
      error => this.loadTasks()
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
