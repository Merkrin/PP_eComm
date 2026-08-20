import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCategoryMenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('PPeCommFrontend');
}
