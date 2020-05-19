import {Component, OnInit} from '@angular/core';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {BaseService} from '../../shared/services/base.service';
import {Top} from '../../shared/interfaces/top.interface';
import {TopService} from '../../shared/services/top.service';

@Component({
  selector: 'app-top-polish',
  templateUrl: './top-polish.component.html',
  styleUrls: ['./top-polish.component.scss']
})
export class TopPolishComponent implements OnInit {
  tops: Top[];
  top;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Топы',
      url: '/topPolish'
    }
  ];

  constructor(private router: Router,
              private topService: TopService) {
  }

  ngOnInit() {
    this.tops = this.topService.getProducts();
  }

  onClick(event, item) {
    this.top = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.top,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }

}
