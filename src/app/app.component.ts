import { Component } from '@angular/core';

export interface Data {
  date: string;
  appointments: number;
  freetimes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weekly-picker';
  data: Data[] = [
    {
      date: "2021-06-07",
      appointments: 72,
      freetimes: 104
    },
    {
      date: "2021-06-08",
      appointments: 2,
      freetimes: 5
    },
    {
      date: "2021-06-09",
      appointments: 70,
      freetimes: 40
    },
    {
      date: "2021-06-10",
      appointments: 70,
      freetimes: 40
    },
    {
      date: "2021-06-11",
      appointments: 70,
      freetimes: 40
    },
  ]
}
