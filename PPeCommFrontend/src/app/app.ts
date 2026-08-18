import { Component, signal } from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('PPeCommFrontend');
}
