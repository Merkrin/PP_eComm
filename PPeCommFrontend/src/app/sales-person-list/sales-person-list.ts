import {Component, OnInit} from '@angular/core';
import {SalesPerson} from './sales-person';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css',
  imports: [CurrencyPipe],
})
export class SalesPersonList implements OnInit {
  // dummy list of people
  salesPersonList: SalesPerson[] = [
    new SalesPerson(
      'Mathias',
      'Beckenbauer',
      'Mathias.Beckenbauer@dummymail.com',
      '0664 439 02 03',
      400,
    ),
    new SalesPerson(
      'Dennis',
      'Goldschmidt',
      'Dennis.Goldschmidt@dummymail.com',
      '0664 281 96 50',
      300,
    ),
    new SalesPerson('Andrea', 'Metzger', 'Andrea.Metzger@dummymail.com', '0699 243 55 01', 800),
    new SalesPerson('Sebastian', 'Baier', 'Sebastian.Baier@dummymail.com', '0650 408 03 19', 700),
    new SalesPerson('Franziska', 'Jager', 'Franziska.Jager@dummymail.com', '0650 393 63 18', 400),
  ];

  ngOnInit(): void {}
}
