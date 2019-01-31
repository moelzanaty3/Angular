import {
  Component,
  AfterViewInit,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';
import { IWidget } from './../../shared';
import { WidgetService } from './../../shared/widget.service';

@Component({
  selector: 'app-widget-search',
  templateUrl: './widget-search.component.html',
  styleUrls: ['./widget-search.component.scss']
})
export class WidgetSearchComponent implements AfterViewInit {
  @ViewChild('widgetsSearch')
  widgetsSearch;
  @Output()
  widgets = new EventEmitter();
  constructor(private widgetService: WidgetService) {}

  ngAfterViewInit() {
    const search$ = fromEvent(this.widgetsSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((event: any) => event.target.value),
        switchMap(query => this.widgetService.search(query))
      )
      .subscribe(widgets => this.widgets.emit(widgets));
  }
}
