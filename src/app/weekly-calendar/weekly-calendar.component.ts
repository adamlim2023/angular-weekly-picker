import { Component, Input } from '@angular/core';
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

export class WeeklyCalendarComponent {
  @Input() data!: Data[];
  constructor() {

    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');

    var days = [];
    for (let i = 1; i <= 5; i++) {
      days.push(moment(weekStart).add(i, 'days').format("MMMM Do,dddd"));
    };
    console.log(days);
  }
}
