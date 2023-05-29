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
      date: "2023-05-30",
      appointments: 72,
      freetimes: 104
    },
    {
      date: "2023-05-31",
      appointments: 2,
      freetimes: 5
    },
    {
      date: "2023-06-01",
      appointments: 70,
      freetimes: 40
    },
    {
      date: "2023-06-02",
      appointments: 70,
      freetimes: 40
    },
    {
      date: "2023-06-08",
      appointments: 70,
      freetimes: 40
    },
  ];

  handleClickDate(data: any) {
    console.log(data)
  }

  handleClickSummary(data: any) {
    console.log(data);
  }
}
