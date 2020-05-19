import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Item} from '../../shared/interfaces/item.interface';
import {ProductService} from '../../shared/services/product.service';


@Component({
  selector: 'app-polish-palette',
  templateUrl: './polish-palette.component.html',
  styleUrls: ['./polish-palette.component.scss']
})
export class PolishPaletteComponent implements OnInit {
  items: Item[];
  item;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Цветовая палитра',
      url: '/polishPalette'
    }
  ];

  constructor(private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.items = this.productService.getProducts();
  }

  onClick(event, item) {
    this.item = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.item,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }

}
