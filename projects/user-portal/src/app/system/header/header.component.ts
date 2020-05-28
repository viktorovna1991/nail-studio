import {Router} from '@angular/router';
import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CurrentCountService} from '../../shared/services/currentCount.service';
import {ProductService} from '../../shared/services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentItemCount;

  constructor(private router: Router,
              private productService: ProductService,
              private currentCountService: CurrentCountService) {
  }

  ngOnInit() {
    this.currentCountService.currentItemCount.subscribe(value => {
      this.currentItemCount = value;
      if (this.productService.getProductFromBasket()) {
        if (value === 0) {
          this.currentItemCount = this.productService.getProductFromBasket().length;
        }
      }
    });
  }


  onClick(event, path) {
    this.router.navigate([path]).then(r => console.log('e'));
  }

}
