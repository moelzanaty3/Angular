import { Component, OnInit } from '@angular/core';
import { Item } from '../shared';
import { IWidget } from './../shared';
import { WidgetService, ItemsService } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: IWidget[];
  constructor(
    private itemsService: ItemsService,
    private widgetService: WidgetService
  ) {}

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.all().subscribe(items => (this.items = items));
  }
  getWidgets() {
    this.widgetService
      .getAllWidgets()
      .subscribe(widgets => (this.widgets = widgets));
  }
}
