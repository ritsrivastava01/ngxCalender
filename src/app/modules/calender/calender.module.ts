import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCalenderComponent } from './calender.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgxCalenderComponent
  ],
  declarations: [NgxCalenderComponent]
})
export class CalenderModule { }
