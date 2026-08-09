import { Component, signal } from '@angular/core';
import {SalesPersonList} from './sales-person-list/sales-person-list';

@Component({
  selector: 'app-root',
  imports: [SalesPersonList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('PPeCommFrontend');
}
