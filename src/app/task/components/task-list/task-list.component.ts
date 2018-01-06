import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this._taskService.list().subscribe(
      tasks => this.tasks = tasks,
      error => console.log(error)
    );
  }

}
