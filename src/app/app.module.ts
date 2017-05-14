import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CountDown} from "../../node_modules/angular2-simple-countdown/countdown";


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
