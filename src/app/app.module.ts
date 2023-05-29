import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyCalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
