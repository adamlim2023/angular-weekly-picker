import { Component, Input, OnInit } from '@angular/core';
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
  currentDate: any = moment();
  selectedDates: Data[] = [];
  index: number = 0;
  summary: any = {
    startDate: '',
    endDate: '',
    appointments: 0,
    freetimes: 0,
  };
  days!: string[];

  ngOnInit() {
    moment.locale('en');
    const localLocale = moment();
    localLocale.locale('et');
    this.days = localLocale.localeData().weekdays().map(item => item[0]);
    this.handleInit(0)
  }

  handleInit(period: number) {
    this.selectedDates = [];
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
    this.index += 1;
    this.handleInit(this.index);
  }

  handleBack() {
    this.index -= 1;
    this.handleInit(this.index);
  }
}
