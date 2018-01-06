import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent, TaskService } from './';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  providers: [
    TaskService
  ],
  declarations: [
    TaskListComponent
  ]
})
export class TaskModule { }
