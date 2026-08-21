import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllProductList() {
    const searchUrl = `${this.baseUrl}/products`;

    return this.getProductsByUrl(searchUrl);
  }

  getProductListByCategory(categoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByCategoryId?id=${categoryId}`;

    return this.getProductsByUrl(searchUrl);
  }

  getProductListByKeyword(searchKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByNameContainingIgnoreCase?name=${searchKeyword}`;

    return this.getProductsByUrl(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    const searchUrl = `${this.baseUrl}/product-category`;

    return this.http
      .get<GetProductCategoriesResponse>(searchUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  private getProductsByUrl(searchUrl: string) {
    return this.http
      .get<GetProductsResponse>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

interface GetProductsResponse {
  _embedded: {
    products: Product[];
  };
}

interface GetProductCategoriesResponse {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
