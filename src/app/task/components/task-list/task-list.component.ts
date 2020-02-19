import { Component, OnInit } from '@angular/core';

import { TaskDto } from '../../dtos/task.dto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: TaskDto[] = [];
  public loading = false;

  public constructor(private taskService: TaskService) {
    //
  }

  public ngOnInit(): void {
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

  public removeTask(removableTask: TaskDto) {
    this.tasks = this.tasks.filter(task => task !== removableTask);
  }

  private loadTasks() {
    this.loading = true;
    this.taskService.list().subscribe(
      tasks => {
        this.tasks = tasks;
        this.loading = false;
      },
      () => this.loading = false
    );
  }
}
