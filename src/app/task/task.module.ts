import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TaskRoutingModule,
  TaskListComponent
} from './task.barrel';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent
  ]
})
export class TaskModule { }
