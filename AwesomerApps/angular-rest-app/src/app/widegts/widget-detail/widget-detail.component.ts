import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWidget } from './../../shared';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.scss']
})
export class WidgetDetailComponent {
  originalName: string;
  selectedWidget: IWidget;
  @Output()
  saved = new EventEmitter();
  @Output()
  cancelled = new EventEmitter();

  @Input()
  set widget(widget: IWidget) {
    if (widget) {
      this.originalName = widget.name;
    }
    this.selectedWidget = Object.assign({}, widget);
  }
}
