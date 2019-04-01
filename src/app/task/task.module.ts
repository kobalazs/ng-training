import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';

@NgModule({
  declarations: [TaskListComponent, TaskListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
