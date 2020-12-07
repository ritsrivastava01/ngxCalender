import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxCalenderComponent } from 'projects/ngx-calender/src/lib/ngx-calender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxCalender-app';
  @ViewChild('calender', { static: true }) private calender: NgxCalenderComponent;
  
  
  clickedDate(evt) {
  console.log(evt);
  console.log(this.calender.currentDate, this.calender.clickedDate, this.calender.currentMonth, this.calender.currentYear);
  }
}
