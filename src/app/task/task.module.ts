import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';
import {
  TaskRoutingModule,
  TaskListComponent,
  TaskListItemComponent,
  TaskService, 
  AgePipe,
  OrderByPipe
} from './task.barrel';

import{ CustomMaterialModule } from '../custom-material/custom-material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    CustomMaterialModule, MaterialModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdIconModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe,
    OrderByPipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
