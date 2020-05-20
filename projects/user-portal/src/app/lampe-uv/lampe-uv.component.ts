import {Component, OnInit} from '@angular/core';
import {IBreadCrumb} from '../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {Lamp} from '../shared/interfaces/lamp.interface';
import {LampService} from '../shared/services/lamp.service';

@Component({
  selector: 'app-lampe-uv',
  templateUrl: './lampe-uv.component.html',
  styleUrls: ['./lampe-uv.component.scss']
})
export class LampeUVComponent implements OnInit {
  lamps: Lamp[];
  lamp;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'Все лампы',
      url: '/lampsUV'
    }
  ];

  constructor(private router: Router,
              private lampService: LampService) {
  }

  ngOnInit() {
    const uv = this.lampService.getUvLamps();
    const led = this.lampService.getLedLamps();
    const uvLed = this.lampService.getUvLedLamps();
    this.lamps = uv.concat(led, uvLed);
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
