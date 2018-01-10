import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent, TaskListItemComponent, AgePipe, TaskService } from './';

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
    TaskListItemComponent,
    AgePipe
  ]
})
export class TaskModule { }
