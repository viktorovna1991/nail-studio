import { Component, OnInit } from '@angular/core';
import {Lamp} from '../../shared/interfaces/lamp.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {LampService} from '../../shared/services/lamp.service';

@Component({
  selector: 'app-led-lamps',
  templateUrl: './led-lamps.component.html',
  styleUrls: ['./led-lamps.component.scss']
})
export class LedLampsComponent implements OnInit {
  ledLamps: Lamp[];
  lamp;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'LED лампы',
      url: '/ledLamps'
    }
  ];

  constructor(private router: Router,
              private lampService: LampService) {
  }

  ngOnInit() {
    this.ledLamps = this.lampService.getLedLamps();
  }

  onClick(event, item) {
    this.lamp = JSON.stringify(item);
    const c = JSON.stringify(this.breadcrumbs);
    this.router.navigate(['itemDescription'], {
      queryParams: {
        product: this.lamp,
        breadcrumbs: c
      }
    }).then(r => console.log('navigated'));
  }


}
