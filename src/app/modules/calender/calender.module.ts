import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CalenderComponent
  ],
  declarations: [CalenderComponent]
})
export class CalenderModule { }
