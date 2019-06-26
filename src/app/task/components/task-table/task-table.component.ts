import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { TaskDto } from '../../dtos/task.dto';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  public tasks: TaskDto[] = [];

  constructor(private taskService: TaskService) {
    //
  }

  ngOnInit() {
    this.taskService.list().subscribe(
      tasks => {
        this.tasks = tasks;
        console.table(this.tasks);
      }
    );
  }

}
