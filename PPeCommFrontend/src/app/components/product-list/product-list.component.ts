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
  //Default value
  currentCategoryName: string = 'All';
  isInSearchMode: boolean = false;

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
    this.isInSearchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.isInSearchMode) {
      this.listFilteredProducts();
    }else {
      this.listCategorizedProducts();
    }
  }

  private listCategorizedProducts(){
    if (this.route.snapshot.paramMap.has('id') && this.route.snapshot.paramMap.get('id') != null) {
      // + converts a string to a number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      this.currentCategoryName = this.route.snapshot.paramMap.get('categoryName')!;

      this.productService.getProductListByCategory(this.currentCategoryId).subscribe((data) => {
        this.products.set(data);
      });
    } else {
      // If something went wrong
      this.currentCategoryName = 'All';

      this.productService.getAllProductList().subscribe((data) => {
        this.products.set(data);
      });
    }
  }

  private listFilteredProducts() {
    if(this.route.snapshot.paramMap.has('keyword') && this.route.snapshot.paramMap.get('keyword')!=null) {
      const searchKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

      this.productService.getProductListByKeyword(searchKeyword).subscribe((data) => {
        this.products.set(data);
      })
    }
  }
}
