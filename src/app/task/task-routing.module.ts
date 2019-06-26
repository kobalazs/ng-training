import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskTableComponent } from './components/task-table/task-table.component';

const routes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'table', component: TaskTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
