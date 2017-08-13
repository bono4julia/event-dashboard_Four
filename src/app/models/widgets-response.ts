import { Widget } from './widget';

export class WidgetResponse {
    constructor(
        public widgets: Widget[],
        public data: any
    ) {}
}