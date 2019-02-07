import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IProduct } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.BASE_URL}/products`);
  }

  getProductById(productId: number) : Observable<IProduct>  {
    return this.http.get<IProduct>(`${environment.BASE_URL}/products/${productId}`)
  }
}
