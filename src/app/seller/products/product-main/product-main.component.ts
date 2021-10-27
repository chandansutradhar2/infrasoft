import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cn-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent implements OnInit {
  links = [
    { title: 'One', fragment: 'one' },
    { title: 'Two', fragment: 'two' },
  ];
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}
}
