import { Component, OnInit } from '@angular/core';
import {Top} from '../../shared/interfaces/top.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {TopService} from '../../shared/services/top.service';
import {Remover} from '../../shared/interfaces/remover.interface';
import {RemoverService} from '../../shared/services/remover.service';

@Component({
  selector: 'app-polish-remover',
  templateUrl: './polish-remover.component.html',
  styleUrls: ['./polish-remover.component.scss']
})
export class PolishRemoverComponent implements OnInit {
  removers: Remover[];
  remover;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Жидкости для снятия геля/лака',
      url: '/polishRemover'
    }
  ];

  constructor(private router: Router,
              private removerService: RemoverService) {
  }

  ngOnInit() {
    this.removers = this.removerService.getProducts();
  }

  onClick(event, item) {
    this.remover = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.remover,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }
}
