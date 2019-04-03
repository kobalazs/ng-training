import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { TaskEditorModalComponent } from './components/task-editor-modal/task-editor-modal.component';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [TaskListComponent, TaskListItemComponent, TaskEditorModalComponent, AgePipe],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    TaskRoutingModule
  ],
  entryComponents: [
    TaskEditorModalComponent
  ]
})
export class TaskModule { }
