import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from './models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  cartItemAdded: EventEmitter<any> = new EventEmitter();
  private _cartItems: CartItem[] = [];

  public get cartItems(): CartItem[] {
    return this._cartItems;
  }

  public set cartItems(v: CartItem[]) {
    this._cartItems = v;
    this.cartItemAdded.emit();
  }

  constructor() {}

  // addToCart(value: any) {
  //   this.cartItemAdded.emit(value);
  // }
}
