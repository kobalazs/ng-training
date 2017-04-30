import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService
} from './task.barrel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
