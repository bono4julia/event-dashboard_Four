import {Component, ElementRef, Input} from '@angular/core';
import {Service} from './event-dashboard.service';
import {Http, HttpModule} from '@angular/http';

import { WidgetsLoaderService } from '../services/widget-loader.service';

import { WidgetResponse } from '../models/widgets-response';

@Component({
    selector: 'app-event-dashboard',
    templateUrl: './event-dashboard.component.html',
    styleUrls: ['./event-dashboard.component.css'],
    providers: [Service]
})

export class EventDashboardComponent {

    @Input() apiUrl: string;

    public widgetsDataDashboard: Promise<WidgetResponse>;

    constructor(
        public service: Service,
        public widgetLoaderService: WidgetsLoaderService,
        elementRef: ElementRef) {
            this.apiUrl = elementRef.nativeElement[0]
    };

    ngOnInit() {
       this.widgetsDataDashboard = this.widgetLoaderService.getWidgets();
    }
}
