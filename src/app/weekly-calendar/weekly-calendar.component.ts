import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as moment from 'moment';

export interface Data {
  date: string;
  appointments: number;
  freetimes: number;
}

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.scss']
})

export class WeeklyCalendarComponent implements OnInit {
  @Input() data!: Data[];
  @Input() onClickDate!: (args: any) => void;
  @Input() onClickSummary!: (args: any) => void;
  @ViewChild("slider") slider!: ElementRef;
  currentDate: any = moment();
  selectedDates: Data[] = [];
  nextWeekDates: Data[] = [];
  lastWeekDates: Data[] = [];
  index: number = 0;
  summary: any = {
    startDate: '',
    endDate: '',
    appointments: 0,
    freetimes: 0,
  };
  days!: string[];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    moment.locale('en');
    const localLocale = moment();
    localLocale.locale('et');
    this.days = localLocale.localeData().weekdays().map(item => item[0]);
    this.handleInit(0)
  }

  handleInit(period: number) {
    this.selectedDates = [];
    this.lastWeekDates = [];
    this.nextWeekDates = [];

    this.summary = {
      startDate: '',
      endDate: '',
      appointments: 0,
      freetimes: 0,
    };

    var weekStart = this.currentDate.clone().subtract(-7 * period, 'days').startOf('week');
    for (let i = 1; i <= 5; i++) {
      const day = moment(weekStart).add(i, 'days').format("YYYY-MM-DD");
      this.selectedDates.push(this.getItemByDate(day));
    };

    var lastWeekStart = this.currentDate.clone().subtract(-7 * (period - 1), 'days').startOf('week');
    for (let i = 1; i <= 5; i++) {
      const day = moment(lastWeekStart).add(i, 'days').format("YYYY-MM-DD");
      this.lastWeekDates.push(this.getItemByDate(day));
    };

    var nextWeekStart = this.currentDate.clone().subtract(-7 * (period + 1), 'days').startOf('week');
    for (let i = 1; i <= 5; i++) {
      const day = moment(nextWeekStart).add(i, 'days').format("YYYY-MM-DD");
      this.nextWeekDates.push(this.getItemByDate(day));
    };

    this.selectedDates.map(item => {
      this.summary.appointments += item.appointments;
      this.summary.freetimes += item.freetimes;
    });
    this.summary.startDate = this.selectedDates[0].date;
    this.summary.endDate = this.selectedDates[4].date;
  }

  getItemByDate(date: string) {
    let filteredItems = this.data.filter(item => item.date === date);
    if (filteredItems.length > 0) {
      return filteredItems[0]
    }
    return {
      date,
      appointments: 0,
      freetimes: 0
    }
  }

  handleNext() {
    this.renderer.setStyle(this.slider.nativeElement, "transition", 'margin 0.5s');
    this.renderer.setStyle(this.slider.nativeElement, "margin-left", '-1900px');
    let that = this;
    setTimeout(function () {
      that.index += 1;
      that.handleInit(that.index);
      that.renderer.setStyle(that.slider.nativeElement, "transition", 'none');
      that.renderer.setStyle(that.slider.nativeElement, "margin-left", '-950px');
    }, 500);
  }

  handleBack() {
    this.renderer.setStyle(this.slider.nativeElement, "transition", 'margin 0.5s');
    this.renderer.setStyle(this.slider.nativeElement, "margin-left", '0');
    let that = this;
    setTimeout(function () {
      that.index -= 1;
      that.handleInit(that.index);
      that.renderer.setStyle(that.slider.nativeElement, "transition", 'none');
      that.renderer.setStyle(that.slider.nativeElement, "margin-left", '-950px');
    }, 500);
  }
}
