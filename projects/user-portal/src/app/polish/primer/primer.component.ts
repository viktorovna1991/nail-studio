import { Component, OnInit } from '@angular/core';
import {Degreaser} from '../../shared/interfaces/degreaser.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {DegreaserService} from '../../shared/services/degreaser.service';
import {Primer} from '../../shared/interfaces/primer.interface';
import {PrimerService} from '../../shared/services/primer.service';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {
  primers: Primer[];
  primer;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Праймеры',
      url: '/primer'
    }
  ];

  constructor(private router: Router,
              private primerService: PrimerService) {
  }

  ngOnInit() {
    this.primers = this.primerService.getProducts();
  }

  onClick(event, item) {
    this.primer = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.primer,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }
}
