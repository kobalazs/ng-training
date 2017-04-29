import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task.barrel'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'list', component: TaskListComponent }
  ])],
  exports: [RouterModule]
})
export class TaskRoutingModule {
  //
}
