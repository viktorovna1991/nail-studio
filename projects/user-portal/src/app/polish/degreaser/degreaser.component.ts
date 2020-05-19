import {Component, OnInit} from '@angular/core';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {Degreaser} from '../../shared/interfaces/degreaser.interface';
import {DegreaserService} from '../../shared/services/degreaser.service';

@Component({
  selector: 'app-degreaser',
  templateUrl: './degreaser.component.html',
  styleUrls: ['./degreaser.component.scss']
})
export class DegreaserComponent implements OnInit {
  degreasers: Degreaser[];
  degreaser;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Обезжиреватели',
      url: '/degreaser'
    }
  ];

  constructor(private router: Router,
              private degreaserService: DegreaserService) {
  }

  ngOnInit() {
    this.degreasers = this.degreaserService.getProducts();
  }

  onClick(event, item) {
    this.degreaser = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.degreaser,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }

}
