import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { MaterialModule, MdInputModule, MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';
//import { CustomMaterialModule } from './custom-material/custom-material.module';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    MdInputModule,
    MdButtonModule, MdCheckboxModule, MdIconModule,
    BrowserAnimationsModule
    //CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
