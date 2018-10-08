import { Component, OnInit } from '@angular/core';
import { IWidget, WidgetService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets;
  selectedWidgetItem;

  constructor(private widgetService: WidgetService) {}
  ngOnInit() {
    this.widgetService.all().subscribe(widgets => (this.widgets = widgets));
  }
  /*Selected Widgets*/
  selectedWidget(widget) {
    this.selectedWidgetItem = widget;
  }
}
