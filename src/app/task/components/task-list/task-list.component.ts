import { Component, OnInit } from '@angular/core';

import {
  Task,
  TaskService,
  OrderByPipe
} from '../../task.barrel';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})



export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public loading: boolean = true;

  public constructor(private _taskService: TaskService) {
    //
  }

  public ngOnInit() {
    this.loadTasks();
  }

  public loadTasks() {
    this.loading = true;
    this._taskService.list({
      success: response => this.tasks = response,
      finally: () => this.loading = false
    });
  }

  public addNewTask() {
    this.loading = true;
    let task = new Task();
    task.name = 'New Task';
    task.position=this.tasks.length; //az utolsó helyre tegye egyből
    this._taskService.create(
      task,
      {
        finally: () => this.loadTasks()
      }
    )
  }

  public removeTask(task: Task) {
    let index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

   public orderTaskUpInList(task: Task) {
    let movableTask1:number = this.tasks.indexOf(task);

    if (movableTask1 !== -1) {

      //task.position;
      let movableTask2:number = movableTask1-1;

      for(let i=0; i<this.tasks.length; i++){
        this.tasks[i].position=i;
        if(i==movableTask1){
          this.tasks[i].position=i-1;
        }
        if(i==movableTask2){
          this.tasks[i].position=i+1;
        }
      }


      this._taskService.update(
        this.tasks[movableTask1],
        {
          finally: () => {
            this._taskService.update(
              this.tasks[movableTask2],
              {
                finally: () => this.loadTasks()
              })
          }
        });

    };
  }
  public orderTaskDownInList(task: Task) {
    let movableTask1:number = this.tasks.indexOf(task);

    if (movableTask1 !== -1) {

      //task.position;
      let movableTask2:number = movableTask1+1;

      for(let i=0; i<this.tasks.length; i++){
        this.tasks[i].position=i;
        if(i==movableTask1){
          this.tasks[i].position=i+1;
        }
        if(i==movableTask2){
          this.tasks[i].position=i-1;
        }
      }

      this._taskService.update(
        this.tasks[movableTask1],
        {
          finally: () => {
            this._taskService.update(
              this.tasks[movableTask2],
              {
                finally: () => this.loadTasks()
              })
          }
        });

    };
  }



}
