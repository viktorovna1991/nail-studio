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
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Цветовая палитра',
      url: '/polishPalette'
    },
    {
      label: 'Описание',
      url: '/itemDescription'
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.item = params['product'];
        this.item = JSON.parse(this.item);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
