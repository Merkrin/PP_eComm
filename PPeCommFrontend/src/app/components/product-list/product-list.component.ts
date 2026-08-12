import {Component, OnInit, signal} from '@angular/core';
import {Product} from '../../common/product';
import {CurrencyPipe} from '@angular/common';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProducts();
  }

  private listProducts() {
    this.productService.getProductList().subscribe((data) => {
      console.log('PRODUCTS FROM BACKEND:', data);
      this.products.set(data);
      console.log('PRODUCTS IN COMPONENT:', this.products);
    });
  }
}
