

# Angular based plug and play calender component

## Screenshot

<div style="text-align:center"><img src ="https://github.com/ritsrivastava01/ngxCalender/blob/master/calender.PNG" /></div>

## Installation
npm install ngx-calender --save

## Usage
###Import the calendar Module
```
  
  import { NgxCalenderModule } from './modules/ngxCalender/ngxCalender.module';;
  // other imports 
  
  @NgModule({
    imports: [
      // other imports 
      NgxCalenderModule
    ],
    // ...
  })
  export class AppModule {}

```
##Add selector in template file my-component.html
```
  
  <ng-calender (clickDateHandler)="clickHandler()" [showHeader]="true"></ng-calender>
  Where
  showHeader : show month and year name in header,default is true
  clickHandler: clicked handler on date

```
### Access the variable from calender component
```

  Access it like:
   @ViewChild('calender') private calender: ElementRef;
  // then you can access some public variables:
    currentDate: string;
    currentDay: string;
    currentMonth: string;
    currentYear: number; 
    
    eg:
    ngAfterViewInit() {
       console.log(this.calender['currentMonth']);
      }
  
  ```
 
unit test coming soon. 

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!
