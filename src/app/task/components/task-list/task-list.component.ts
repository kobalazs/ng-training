import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[] = [];

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public addNewTask() {
    const task = new Task();
    task.name = 'New Task';
    this.taskService.create(task).subscribe(
      () => this.loadTasks()
    );
  }

  public updateTask(task: Task) {
    this.taskService.update(task).subscribe(
      updatedTask => task = updatedTask,
      error => this.loadTasks()
    );
  }

  private loadTasks() {
    this.taskService.list().subscribe(
      tasks => this.tasks = tasks,
      error => console.log(error)
    );
  }

}
