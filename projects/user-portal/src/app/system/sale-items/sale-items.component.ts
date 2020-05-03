import {Component, OnInit} from '@angular/core';
import {trigger, style, animate, transition, keyframes} from '@angular/animations';

export interface SaleItem {
  image: string;
  name: string;
  num: number;
}

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.scss']
})
export class SaleItemsComponent implements OnInit {

  saleItems: SaleItem[] = [
    {image: 's', name: 'Frozen yogurt', num: 1},
    {image: 's', name: 'Frozen yogurt', num: 2},
    {image: 's', name: 'Frozen yogurt', num: 3},
    {image: 's', name: 'Frozen yogurt', num: 4},
    {image: 's', name: 'Frozen yogurt', num: 5},

  ];
  gallery;
  items;
  len;
  current = 0;
  first;
  last;

  constructor() {
  }

  ngOnInit() {
    this.len = this.saleItems.length;
    this.first = this.saleItems[0];
    this.last = this.saleItems[this.len - 1];
    this.saleItems.push(this.first);
    this.saleItems.unshift(this.last);
  }

  onChangeItem(event) {
    const delta = (event.target.id === 'prev') ? 1 : -1;
    if (this.current === 1 && event.target.id === 'prev') {
      this.current = -(this.len);
    }
    if (this.current === -1 && event.target.id === 'prev') {
      this.current = -(this.len + 1);
    }
    if (this.current < -(this.len - 1) && event.target.id === 'next') {
      this.current = 0;
    }
    this.gallery = document.getElementById('gallery');
    this.current += delta;
    this.current = (this.current === 0) ? this.len : this.current;
    this.gallery.style.left = 100 * this.current + 'px';
    console.log(this.current);
    return this.current;
  }
}
