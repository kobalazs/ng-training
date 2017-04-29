import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskService
} from './task.barrel';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
