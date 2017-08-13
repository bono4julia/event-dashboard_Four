import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WidgetsLoaderService } from '../services/widget-loader.service';
 
import { EventDashboardComponent } from './event-dashboard.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';

@NgModule({
    declarations: [
        EventDashboardComponent,
        WidgetComponent,
        WidgetContainerComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ],
    providers: [
        WidgetsLoaderService
    ],
    exports: [EventDashboardComponent]
})
export class EventDashboardModule { }
