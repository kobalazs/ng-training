import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { TaskDto } from '../../dtos/task.dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: TaskDto[] = [];

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public addNewTask() {
    const task = new TaskDto();
    task.name = 'New Task';
    this.taskService.create(task).subscribe(
      () => this.loadTasks()
    );
  }

  private loadTasks() {
    this.taskService.list().subscribe(
      tasks => this.tasks = tasks,
      error => console.log(error)
    );
  }

}
