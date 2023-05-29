import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCalendarComponent } from './weekly-calendar.component';

describe('WeeklyCalendarComponent', () => {
  let component: WeeklyCalendarComponent;
  let fixture: ComponentFixture<WeeklyCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyCalendarComponent]
    });
    fixture = TestBed.createComponent(WeeklyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
