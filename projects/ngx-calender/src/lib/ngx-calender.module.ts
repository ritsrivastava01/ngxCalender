import { NgModule } from '@angular/core';
import { NgxCalenderComponent } from './ngx-calender.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxCalenderComponent],
  exports: [NgxCalenderComponent]
})
export class NgxCalenderModule { }
