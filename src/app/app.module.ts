import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCalenderModule } from 'projects/ngx-calender/src/public_api';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
