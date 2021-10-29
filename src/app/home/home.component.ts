import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { DISCOUNT_TYPE, Product } from '../models/product.model';
import { User } from '../models/user.model';
import { ProductService } from '../product.service';
import { StateService } from '../state.service';
import { UserService } from '../user.service';

@Component({
  selector: 'cn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: User;
  products: Product[] = [];
  constructor(
    private userSvc: UserService,
    private stateSvc: StateService,
    private productSvc: ProductService
  ) {
    this.user = this.userSvc.getUser();
    this.productSvc.getAllProduct().then((r) => {
      this.products = r;
    });
  }

  ngOnInit(): void {
    this.userSvc.onUserChange.subscribe((r) => {
      if (r) {
        this.user = r;
      }
    });
  }

  addToCart(product: Product) {
    let cartItems: CartItem[] = [];
    cartItems = this.stateSvc.cartItems;
    // check if the item exists inside the cart.
    // if yes inctement the item qty... else add new item in cart
    let idx = cartItems.findIndex((ele) => {
      return ele.itemId == product._id;
    });
    if (idx >= 0) {
      //product already exists in cart.
      //increment the quantity
      cartItems[idx].qty = cartItems[idx].qty + 1;
    } else {
      //product doesn't exist in cart. add the product item
      cartItems.push({
        itemId: product._id || '',
        name: product.name,
        price: product.price,
        qty: 1,
      });
    }
    this.stateSvc.cartItems = cartItems;
  }
}
