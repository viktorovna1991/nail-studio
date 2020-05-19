import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit, OnDestroy {
  item;
  sub;
  min = 1;
  breadcrumbs;
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

  constructor(private route: ActivatedRoute) {
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

}
