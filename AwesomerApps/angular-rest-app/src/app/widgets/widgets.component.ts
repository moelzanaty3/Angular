import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../shared';
import { Form, FormGroup } from '@angular/forms';

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
    this.reset();
  }
  /*Selected Widgets*/
  selectedWidget(widget) {
    this.selectedWidgetItem = widget;
  }
  reset() {
    this.selectedWidgetItem = { name: '', description: '' };
  }
  save(value) {
    console.log(value);
  }
  cancel() {
    this.reset();
  }
}
