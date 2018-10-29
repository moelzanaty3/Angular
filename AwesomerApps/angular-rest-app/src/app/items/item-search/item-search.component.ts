import {
  Component,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { ItemsService } from '../../shared';
import { fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements AfterViewInit {
  @ViewChild('itemsSearch')
  itemSearch;
  @Output()
  items = new EventEmitter();
  constructor(private itemsService: ItemsService) {}
  ngAfterViewInit() {
    const search$ = fromEvent(this.itemSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((event: any) => event.target.value),
        switchMap(query => this.itemsService.search(query))
      )
      .subscribe(items => this.items.emit(items));
  }
}
