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
    this.taskService.list().subscribe(
      tasks => this.tasks = tasks,
      error => console.log(error)
    );
  }

}
