import { Component, OnInit } from '@angular/core';
import {Lamp} from '../../shared/interfaces/lamp.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {LampService} from '../../shared/services/lamp.service';

@Component({
  selector: 'app-uv-led-lamps',
  templateUrl: './uv-led-lamps.component.html',
  styleUrls: ['./uv-led-lamps.component.scss']
})
export class UvLedLampsComponent implements OnInit {
  uvLedLamps: Lamp[];
  lamp;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'UV/LED лампы',
      url: '/uvLedLamps'
    }
  ];

  constructor(private router: Router,
              private lampService: LampService) {
  }

  ngOnInit() {
    this.uvLedLamps = this.lampService.getUvLedLamps()
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
