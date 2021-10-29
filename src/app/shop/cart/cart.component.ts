import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'cn-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItemCount: number = 0;
  constructor(private stateSvc: StateService) {
    this.stateSvc.cartItemAdded.subscribe(() => {
      this.cartItemCount = 0;
      let cartItems: CartItem[] = this.stateSvc.cartItems;
      cartItems.forEach((item) => {
        this.cartItemCount = this.cartItemCount + item.qty;
      });
    });
  }

  ngOnInit(): void {}
}
