import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [TaskListComponent, TaskListItemComponent, AgePipe],
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    ColorPickerModule
  ]
})
export class TaskModule { }
