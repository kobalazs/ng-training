import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthService } from './index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    NotFoundComponent,
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
