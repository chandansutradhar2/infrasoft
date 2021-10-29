import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavMenu } from '../models/menu.model';
import { StateService } from '../state.service';

@Component({
  selector: 'cn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() categories: NavMenu[];
  @Input() btnValue: string = 'Login';
  @Output() onBtnClick: EventEmitter<string> = new EventEmitter();
  cartArray: any[] = [
    { name: 'Jacket', price: 2450, qty: 2 },
    { name: 'Trouser', price: 1566, qty: 1 },
    { name: 'Socks Pack of 1', price: 599, qty: 3 },
  ];
  constructor(private stateSvc: StateService) {
    this.categories = [];
    this.stateSvc.cartItemAdded.subscribe((value) => {
      this.cartArray.push(value);
    });
  }

  ngOnInit(): void {
    console.log(this.categories);
  }

  loginOutout() {
    this.onBtnClick.emit(this.btnValue);
  }
}
