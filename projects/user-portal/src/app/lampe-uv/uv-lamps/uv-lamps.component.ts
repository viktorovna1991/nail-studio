import { Component, OnInit } from '@angular/core';
import {Lamp} from '../../shared/interfaces/lamp.interface';
import {IBreadCrumb} from '../../shared/interfaces/breadCrumb.iterface';
import {Router} from '@angular/router';
import {LampService} from '../../shared/services/lamp.service';

@Component({
  selector: 'app-uv-lamps',
  templateUrl: './uv-lamps.component.html',
  styleUrls: ['./uv-lamps.component.scss']
})
export class UvLampsComponent implements OnInit {
  uvLamps: Lamp[];
  lamp;
  breadcrumbs: IBreadCrumb[] = [
    {
      label: 'Главная',
      url: '/main'
    },
    {
      label: 'UV лампы',
      url: '/uvLamps'
    }
  ];

  constructor(private router: Router,
              private lampService: LampService) {
  }

  ngOnInit() {
    this.uvLamps = this.lampService.getUvLamps();
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
