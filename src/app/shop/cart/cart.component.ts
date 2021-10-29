import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cn-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartItems: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
