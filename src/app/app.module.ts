import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCalenderModule } from './modules/ngxCalender/ngxCalender.module';



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
