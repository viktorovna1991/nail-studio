import {Component, OnInit} from '@angular/core';
import {IBreadCrumb} from '../shared/interfaces/breadCrumb.iterface';
import {ProductService} from '../shared/services/product.service';
import {MatTableDataSource} from '@angular/material/table';

// export interface PeriodicElement {
//   position: number;
//   image: string;
//   name: string;
//   price: number;
//   quantity: number;
//   toDelete: string;
//   total: number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, image: 'aa', name: 'Hydrogen', price: 24, quantity: 1, toDelete: 'yes', total: 1},
//   {position: 2, image: 'aa', name: 'Hydrogen', price: 24, quantity: 1, toDelete: 'yes', total: 1},
//   {position: 3, image: 'aa', name: 'Hydrogen', price: 24, quantity: 1, toDelete: 'yes', total: 1}
// ];

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items;
  item;
  dataSource;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Корзина',
      url: '/basket'
    }
  ];
  displayedColumns: string[] = ['position', 'image', 'name', 'price', 'quantity', 'toDelete', 'total'];

  // dataSource = ELEMENT_DATA;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.items = this.productService.getProductFromBasket();
    this.dataSource = new MatTableDataSource(this.items);
  }

  getTotalCost() {
    return this.items.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }
}
