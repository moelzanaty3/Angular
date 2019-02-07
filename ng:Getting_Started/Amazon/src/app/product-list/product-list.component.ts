import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';
import { ProductsService } from '../services/products.service';
 

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  products: IProduct[];
  imageWidth: number = 100;
  imageMargin: number = 10;
  exist: boolean = true;
  listFilter: string;
  isFetched: boolean = false;
  constructor(private productsService: ProductsService ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: IProduct[]) => {
      this.isFetched = !this.isFetched;
      this.products = products;
    })
  }

  toggleImage(): void {
    this.exist = !this.exist;
  }
}
