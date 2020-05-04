import {Component, OnInit} from '@angular/core';

export interface SaleItem {
  image: string;
  name: string;
  price: string;
}

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.scss']
})

export class SaleItemsComponent implements OnInit {
  saleItems: SaleItem[] = [
    {image: '../../../assets/pink-polish.png', name: 'UV NAGELLACK 7,2 ML - FIRST RAYS', price: '9.90 EUR'},
    {image: '../../../assets/polish.png', name: 'Frozen yogurt', price: '10.90 EUR'},
    {image: '../../../assets/pink-polish.png', name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM', price: '9.90 EUR'},
    {image: '../../../assets/polish.png', name: 'Frozen yogurt', price: '10.90 EUR'},
    {image: '../../../assets/pink-polish.png', name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM', price: '9.90 EUR'},
    {image: '../../../assets/polish.png', name: 'UV NAGELLACK 7,2 ML - FIRST RAYS', price: '10.90 EUR'},
    {image: '../../../assets/pink-polish.png', name: 'Frozen yogurt', price: '9.90 EUR'},
    {image: '../../../assets/polish.png', name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM', price: '10.90 EUR'},
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
