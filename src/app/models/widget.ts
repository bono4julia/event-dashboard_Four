import { WidgetSchema } from './widget-schema';

export class Widget {
    constructor(
        public label: string = null,
        public position: number = null,
        public group: string = null,
        public schema: WidgetSchema[] = null,
        public data: any = null
    ) {}
}