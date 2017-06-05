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
  OrderByPipe,
  CurrencyFormatPipe
} from './task.barrel';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    MaterialModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdIconModule
  ],
  declarations: [
    TaskListComponent,
    TaskListItemComponent,
    AgePipe,
    OrderByPipe,
    CurrencyFormatPipe
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
