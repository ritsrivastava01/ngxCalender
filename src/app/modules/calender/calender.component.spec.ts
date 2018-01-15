import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalenderComponent } from './calender.component';

describe('NgxCalenderComponent', () => {
  let component: NgxCalenderComponent;
  let fixture: ComponentFixture<NgxCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
