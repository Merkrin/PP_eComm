import { Component, OnInit, signal } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-category-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css',
})
export class ProductCategoryMenuComponent implements OnInit {
  productCategories = signal<ProductCategory[]>([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProductCategories();
  }

  private listProductCategories() {
    this.productService.getProductCategories().subscribe((data) => {
      this.productCategories.set(data);
    });
  }
}
