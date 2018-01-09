import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent, TaskListItemComponent, TaskService } from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ],
  providers: [
    TaskService
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent
  ]
})
export class TaskModule { }
