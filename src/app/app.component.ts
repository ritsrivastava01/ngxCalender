import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgxCalenderComponent } from './modules/ngxCalender/ngxCalender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  @ViewChild(NgxCalenderComponent) calender: NgxCalenderComponent;

  ngAfterViewInit() {
    console.log(this.calender.currentYear);
  }

}
