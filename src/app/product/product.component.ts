import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DISCOUNT_TYPE, Product } from '../models/product.model';

@Component({
  selector: 'cn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() onAddClicked: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addEvent() {
    this.onAddClicked.emit(this.product);
  }
}
