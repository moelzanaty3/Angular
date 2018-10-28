import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../shared';
import { IWidget } from './../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets: IWidget[];
  currentWidget: IWidget;
  constructor(private widgetService: WidgetService) {}
  ngOnInit() {
    this.getWidgets();
    this.resetCurrentWidget();
  }

  resetCurrentWidget() {
    this.currentWidget = { id: null, name: '', description: '' };
  }
  selectWidget(widget) {
    this.currentWidget = widget;
  }
  cancel() {
    this.resetCurrentWidget();
  }
  getWidgets() {
    this.widgetService
      .getAllWidgets()
      .subscribe(widgets => (this.widgets = widgets));
  }
  createWidget(widget) {
    this.widgetService.create(widget).subscribe(() => {
      this.getWidgets();
      this.resetCurrentWidget();
    });
  }
  updateWidget(widget) {
    this.widgetService.update(widget).subscribe(() => {
      this.getWidgets();
      this.resetCurrentWidget();
    });
  }
  deleteWidget(widget) {
    this.widgetService.delete(widget).subscribe(() => {
      this.getWidgets();
      this.resetCurrentWidget();
    });
  }
  savedWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    }
    this.updateWidget(widget);
  }
}
