import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  cartItemAdded: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addToCart(value: any) {
    this.cartItemAdded.emit(value);
  }
}
