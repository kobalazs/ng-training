import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { AgePipe } from './pipes/age.pipe';
import { TaskTableComponent } from './components/task-table/task-table.component';

@NgModule({
  declarations: [TaskListComponent, TaskListItemComponent, AgePipe, TaskTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
