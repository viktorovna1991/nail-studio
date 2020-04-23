import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pagination;
  curSlide = 1;

  constructor() {}

  ngOnInit() {
    let animation = true;
    let scrolledUp;
    let nextSlide;

    this.pagination = (slide, target) => {
      animation = true;
      if (target === undefined) {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      } else {
        nextSlide = scrolledUp ? slide - 1 : slide + 1;
      }

      setTimeout(() => {
        animation = false;
      }, 3000);
    };

    setTimeout(() => {
      animation = false;
    }, 4500);
  }

  toChoose(event) {
    this.pagination(this.curSlide, event.target.value);
    this.curSlide = event.target.value;
  }
}
