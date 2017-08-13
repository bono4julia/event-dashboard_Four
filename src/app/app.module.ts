import { BrowserModule } from '@angular/platform-browser'; //System
import { NgModule } from '@angular/core';

import { EventDashboardModule } from './event-dashboard/event-dashboard.module'; //Module

import { AppComponent } from './app.component'; //Component

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
