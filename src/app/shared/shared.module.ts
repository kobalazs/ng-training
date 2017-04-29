import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  NotFoundComponent,
  NavigationComponent,
  ApiService,
  AuthService,
  AuthGuard
} from './shared.barrel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NotFoundComponent,
    NavigationComponent
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard
  ]
})
export class SharedModule { }
