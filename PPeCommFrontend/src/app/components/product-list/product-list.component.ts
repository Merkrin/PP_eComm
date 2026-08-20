import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../common/product';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  currentCategoryId: number = 1;
  products = signal<Product[]>([]);

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  private listProducts() {
    if (this.route.snapshot.paramMap.has('id') && this.route.snapshot.paramMap.get('id') != null) {
      // + converts a string to a number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe((data) => {
      this.products.set(data);
    });
  }
}
