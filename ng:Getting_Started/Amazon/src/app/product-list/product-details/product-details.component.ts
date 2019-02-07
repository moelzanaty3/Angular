import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  isFetched: boolean;
  noProduct: boolean;

  constructor(
    private route: ActivatedRoute,
    private productServiece: ProductsService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap['params'].id;
    if (productId) {
      this.productServiece
      .getProductById(productId)
      .subscribe((product: IProduct) => {
        this.isFetched = true;
        this.product = product;
      }, (error: Response) => {
          if (error.status === 404) {
            this.noProduct = true;
            this.isFetched = true;
          }
      });
    }
  }
}
