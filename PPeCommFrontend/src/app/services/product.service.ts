import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) {}

  getProductList(categoryId:number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;

    return this.http.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded:{
    products: Product[];
  }
}
