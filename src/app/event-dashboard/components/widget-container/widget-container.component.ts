import { Component, Input, OnChanges } from '@angular/core';

import { WidgetResponse } from '../../../models/widgets-response';
import { Widget } from '../../../models/widget';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.css']
})
export class WidgetContainerComponent implements OnChanges {

  @Input() widgetsDataContainer: WidgetResponse;

  leftBlocks: Widget[];
  rightBlocks: Widget[];

  constructor() {
    
  }

  ngOnChanges() {
    if(!this.widgetsDataContainer) {
      return
    }

    this.leftBlocks = this.widgetsDataContainer.widgets.filter(item => {
      return item.group === 'leftblock'
    });

    this.rightBlocks = this.widgetsDataContainer.widgets.filter(item => { 
      return item.group === 'rightblock'
    })
  }
}