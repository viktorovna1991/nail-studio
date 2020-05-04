import {Component, OnInit} from '@angular/core';

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
    {image: 's', name: 'Frozen yogurt', num: 6},
    {image: 's', name: 'Frozen yogurt', num: 7},
    {image: 's', name: 'Frozen yogurt', num: 8},
  ];

  gallery;
  items;
  len;
  current = 0;

  constructor() {
  }

  ngOnInit() {
    this.len = this.saleItems.length;
  }

  onChangeItem(event) {
    if (this.current === 1 && event.target.id === 'prev') {
      this.current = -(this.len);
    }
    if (this.current < -(this.len - 1) && event.target.id === 'next') {
      this.current = 0;
    }
    if (event.target.id === 'next') {
      this.saleItems.push(this.saleItems[0]);
      this.saleItems.shift();
    }
    if (event.target.id === 'prev') {
      this.saleItems.unshift(this.saleItems[this.len - 1]);
      this.saleItems.pop();
    }
    this.gallery = document.getElementById('gallery');
    this.gallery.style.left = 220 * this.current + 'px';
    return this.current;
  }
}
