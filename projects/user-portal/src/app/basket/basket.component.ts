import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IBreadCrumb} from '../shared/interfaces/breadCrumb.iterface';
import {ProductService} from '../shared/services/product.service';
import {MatTableDataSource} from '@angular/material/table';
import {CurrentCountService} from '../shared/services/currentCount.service';

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

  constructor(private productService: ProductService,
              private currentCountService: CurrentCountService) {
  }

  ngOnInit() {
    this.productService.currentItems.subscribe(items => {
      items = this.items = this.productService.getProductFromBasket();
      this.dataSource = new MatTableDataSource(this.items);
      console.log(items, "itemsb");
    });
  }

  getTotalCost() {
    return this.items.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  toDeleteProduct(item: any) {
    this.items = this.items.filter(i => i.id !== item.id);
    this.productService.addProductToBasket(this.items);
    this.productService.currentItemsSource.next(this.items);
    this.currentCountService.updateItemCount(this.items);
  }

  toChangeQuality(item: any) {
    let prod = this.productService.getProductFromBasket();
    prod.find(p => p.id === item.id).quantity = item.quantity;
    this.productService.removeAllProductsFromBasket();
    this.productService.addProductToBasket(prod);
    this.currentCountService.updateItemCount(this.items.length);
  }

}
