import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-polish',
  templateUrl: './polish.component.html',
  styleUrls: ['./polish.component.scss']
})
export class PolishComponent implements OnInit {
  @Input() breadcrumbs;

  constructor() { }

  ngOnInit(): void {
  }

}
