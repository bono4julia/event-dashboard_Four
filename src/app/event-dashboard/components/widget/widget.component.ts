import { Component, Input } from '@angular/core';

import { Widget } from '../../../models/widget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  @Input() widgets: Widget[];
  @Input() commonData: any;

  constructor() { }

  getData(widget: Widget, fieldName: string) {
    if(widget.data != null) {
      return widget.data[fieldName];
    } else {
      return this.commonData[fieldName];
    }
  }
}
