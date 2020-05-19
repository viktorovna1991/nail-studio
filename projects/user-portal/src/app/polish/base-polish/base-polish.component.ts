import { Component, OnInit } from '@angular/core';
import {Degreaser} from '../../shared/interfaces/degreaser.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {DegreaserService} from '../../shared/services/degreaser.service';
import {Base} from '../../shared/interfaces/base.interface';
import {BaseService} from '../../shared/services/base.service';

@Component({
  selector: 'app-base-polish',
  templateUrl: './base-polish.component.html',
  styleUrls: ['./base-polish.component.scss']
})
export class BasePolishComponent implements OnInit {
  bases: Base[];
  base;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Базы',
      url: '/basePolish'
    }
  ];

  constructor(private router: Router,
              private baseService: BaseService) {
  }

  ngOnInit() {
    this.bases = this.baseService.getProducts();
  }

  onClick(event, item) {
    this.base = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.base,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }

}
