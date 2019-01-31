import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IWidget } from './../../shared';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent {
  @Input()
  widgets: IWidget[];
  @Input()
  readonly: boolean = false;
  @Output()
  selected = new EventEmitter();
  @Output()
  deleted = new EventEmitter();
}
