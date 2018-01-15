import {
  Component, Input, OnInit, EventEmitter, Output, ViewChildren, ElementRef,
  AfterViewInit, Renderer2
} from '@angular/core';
import { format, subDays, getDaysInMonth, startOfMonth, getMonth, parse } from 'date-fns';

@Component({
  selector: 'ng-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class NgxCalenderComponent implements OnInit, AfterViewInit {

  @Input() showHeader = true;
  @Output() clickedDate = new EventEmitter<Date>();
  currentDate: string;
  currentMonth: string;
  currentYear: number;
  protected noOfColumn: Array<number>;
  protected noOfRows: Array<number>;
  private currDaysInCurrMonth: number;
  private count: number;
  @ViewChildren('tdCell') private tdCollection;
  private currMonthFirstDay: number;
  protected isCurrentDate: boolean;
  private clickedDateCell: HTMLElement;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    this.count = 0;
    this.noOfRows = Array(5).map((x, i) => i);
    this.noOfColumn = Array(7).map((x, i) => i);
    this.currentDate = format(new Date(), 'D');
    this.currentMonth = format(new Date(), 'MMMM');
    this.currentYear = Number(format(new Date(), 'YYYY'));
    this.currDaysInCurrMonth = getDaysInMonth(new Date());
    this.currMonthFirstDay = (Number(format(startOfMonth(new Date()), 'd')) - 1);
  }

  ngAfterViewInit() {
    this.tdCollection.map((x: ElementRef) => {
      if (x.nativeElement.innerText === this.currentDate) {
        this.renderer.addClass(x.nativeElement, 'currentDate');
      }
    });

  }

  getMonthDate: (colInd: number, rowIndex: number) => Number = function(colInd, rowIndex) {
    if (colInd === 0 && rowIndex === 0) {
      this.count = 0;
    }
    this.isCurrentDate = false;
    if (rowIndex === 0) {
      if (colInd >= this.currMonthFirstDay) {
        return this.getDate();
      }
    } else if (this.count < this.currDaysInCurrMonth) {
      return this.getDate();
    }
  };

  getDate: () => number = function () {
    this.count++;
    return this.count;
  };

  clickHandler(evt: Event) {
    if (evt.currentTarget['innerText'] !== '') {

      if (this.clickedDateCell) {
        this.renderer.removeClass(this.clickedDateCell, 'highlightDateCell');
      }
      this.clickedDateCell = <HTMLElement>evt.currentTarget;
      this.renderer.addClass(this.clickedDateCell, 'highlightDateCell');
      const date = parse(`${this.currentYear}-${this.currentMonth}-${this.currentDate}`);
      this.clickedDate.emit(date);
    }
  }
}
