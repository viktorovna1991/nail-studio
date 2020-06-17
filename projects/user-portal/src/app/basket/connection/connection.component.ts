import { Component, OnInit } from '@angular/core';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Корзина',
      url: '/basket'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
