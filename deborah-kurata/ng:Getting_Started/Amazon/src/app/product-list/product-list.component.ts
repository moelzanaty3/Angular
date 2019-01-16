import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/product';

const PRODUCTS: IProduct[] = [
  {
    "productId": 1,
    "productName": "Apple MacBook Air",
    "productCode": "GDN-0011",
    "releaseDate": "Jan 19, 2019",
    "description": "13-inch Retina display, 1.6GHz dual-core Intel Core i5, 128GB) - Gold (Latest Model)",
    "price": 1149,
    "starRating": 3.6,
    "imageUrl": "http://bit.ly/2M5JpbR"
  },
  {
    "productId": 2,
    "productName": "ASUS C202SA-YS02 11.6",
    "productCode": "GDN-0023",
    "releaseDate": "Jan 18, 2019",
    "description": "Ruggedized and Water Resistant Design with 180 Degree (Intel Celeron 4 GB, 16GB eMMC, Dark Blue, Silvers",
    "price": 218.99,
    "starRating": 4.2,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/31inMpRxCFL._AC_US218_.jpg"
  },
  {
    "productId": 3,
    "productName": "ASUS C302CA-DHM4",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2019",
    "description": "Chromebook Flip 12.5-inch Touchscreen Convertible Chromebook, Intel Core m3, 4GB RAM, 64GB Flash Storage, All-Metal Body, USB Type C, Corning Gorilla Glass, Chrome OS",
    "price": 474.99,
    "starRating": 4.8,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/41LBkDN-S3L._AC_AA200_.jpg"
  }]
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  products: IProduct[] = PRODUCTS;
  imageWidth = 100;
  imageMargin = 10;
  exist: boolean = true;
  searchKeyWord: string;
  constructor() { }

  ngOnInit() {
  }
  toggleImage() {
    this.exist = !this.exist
  }
} 
