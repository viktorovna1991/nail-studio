import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Item, ProductService} from '../../shared/services/product.service';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';


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
    this.router.navigate(['itemDescription'],  { queryParams: { product: this.item } }).then(r => console.log('navigated'));
  }

}
