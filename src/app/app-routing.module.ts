import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) },
  { path: 'task', loadChildren: () => import(`./task/task.module`).then(m => m.TaskModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
