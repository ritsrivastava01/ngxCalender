# Angular based plug and play calender component

## Screenshot

<div style="text-align:center"><img src ="https://github.com/ritsrivastava01/ngxCalender/raw/master/calender.PNG" /></div>

## Installation
npm install ngx-calender --save

## Usage
###Import the calendar Module
```
  
 import { NgxCalenderModule } from 'ngxCalender';
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
  
  <ng-calender (clickedDate)="clickHandler()" ></ng-calender>
  Where
  
  clickHandler: clicked handler on date and it return the clicked date as Date like:
  eg: Wed Aug 01 2018 00:00:00 GMT+0200 (Central European Summer Time)

```
### Access the variable from calender component
```

  Access it like:
   @ViewChild('calender') private calender: NgxCalenderComponent;
  // then you can access some public variables:
    currentDate: string;
    currentMonth: string;
    currentYear: number; 
    
    eg:
    ngAfterViewInit() {
       console.log(this.calender.currentDate, this.calender.currentMonth, this.calender.currentYear);
      }
  
  ```
 
unit test coming soon. 

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!

## Future Plan
- [ ] Able to move previous/next month
- [ ] Able to move previous/next year
- [ ] Able to return current week details
- [ ] ...


