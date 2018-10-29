import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  @ViewChild('itemsSearch')
  itemSearch;
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {}

  getNativeElement(element) {
    return element.nativeElement;
  }
}
