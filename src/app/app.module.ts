import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalenderComponent } from './modules/calender/calender.component';
import { CalenderModule } from './modules/calender/calender.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalenderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
