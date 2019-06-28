import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { GrandchildComponent } from './components/grandchild/grandchild.component';

@NgModule({
  declarations: [HomeComponent, ChildComponent, GrandchildComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
