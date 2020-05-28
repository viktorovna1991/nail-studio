import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Item} from '../../shared/interfaces/item.interface';
import {CurrentCountService} from '../../shared/services/currentCount.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit, OnDestroy {
  item;
  sub;
  quantity = 1;
  breadcrumbs;
  productAddedToBasket;
  basketItemCount;
  // breadcrumbs: IBreadCrumb[] = [
  //   {
  //     label: 'Главная',
  //     url: '/main'
  //   },
  //   {
  //     label: 'Цветовая палитра',
  //     url: '/polishPalette'
  //   },
  //   {
  //     label: 'Описание',
  //     url: '/itemDescription'
  //   }
  // ];

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private currentCountService: CurrentCountService) {
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        const item = params.product;
        this.item = JSON.parse(item);
        const breadcrumbs = params.breadcrumbs;
        this.breadcrumbs = JSON.parse(breadcrumbs);
        this.breadcrumbs.push({
          label: 'Описание',
          url: '/itemDescription'
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToBasket(item: Item) {
    for (let i = 1; i <= this.quantity; i++) {
      this.productAddedToBasket = this.productService.getProductFromBasket();
      if (this.productAddedToBasket === null) {
        this.productAddedToBasket = [];
        this.productAddedToBasket.push(item);
        this.productService.addProductToBasket(this.productAddedToBasket);
      } else {
        const tempProduct = this.productAddedToBasket.find(p => p.id === item.id);
        if (!tempProduct) {
          this.productAddedToBasket.push(item);
          this.productService.addProductToBasket(this.productAddedToBasket);
        }
        if (tempProduct) {
          this.productAddedToBasket.push(item);
          this.productService.addProductToBasket(this.productAddedToBasket);
        } else {
          this.productAddedToBasket.find(p => {
            if (p.id === tempProduct.id) {
              p.quantity = tempProduct.quantity + 1;
              this.productService.addProductToBasket(this.productAddedToBasket);
            }
          });
          console.log('q', this.productAddedToBasket);
        }
      }
      this.basketItemCount = this.productAddedToBasket.length;
      this.currentCountService.updateItemCount(this.basketItemCount);
    }
  }

    valueChanged(quantity: number) {
      quantity = this.quantity;
    }
  }
