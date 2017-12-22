

# Angular based simple plug and play calender

## Screenshot

<div style="text-align:center"><img src ="https://github.com/ritsrivastava01/ng2calender/blob/master/src/calender.PNG" /></div>

## Installation
npm install ngxCalender --save

## Usage
###Import the calendar Module
```
  
  import { CalenderModule } from 'ngx-Calender';
  // other imports 
  
  @NgModule({
    imports: [
      // other imports 
      CalenderModule
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

  Access by it @viewChild() calender: ElementByRef;
  // then you can access some public variables:
    currentDate: string;
    currentDay: string;
    currentMonth: string;
    currentYear: number; 
  
  ```
 
unit test coming soon. 

## Running end-to-end tests

coming soon.

## Further help

pull request always welcome!!!
