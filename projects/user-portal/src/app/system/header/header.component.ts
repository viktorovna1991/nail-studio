import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CurrentCountService} from '../../shared/services/currentCount.service';
import {ProductService} from '../../shared/services/product.service';
import {Item} from '../../shared/interfaces/item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentItemCount = 0;
  item: Item;

  constructor(private router: Router,
              private productService: ProductService,
              private currentCountService: CurrentCountService) {
  }

  ngOnInit() {
    this.currentCountService.currentItemCount.subscribe(value => {
      console.log('value', value.valueOf());
      if (value >= 0) {
        this.productService.currentItems.subscribe(value1 => {
          const products = this.productService.getProductFromBasket();
          console.log('products', products);
          this.currentItemCount = 0;
          for (let i = 0; i < products.length; i++) {
            this.currentItemCount += products[i].quantity;
          }
        });
      }
      console.log(this.currentItemCount, 'ch');
    });
  }


  onClick(event, path) {
    this.router.navigate([path]).then(r => console.log('e'));
  }

}
