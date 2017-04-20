import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
  ]
})
export class SharedModule { }
