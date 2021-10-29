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

  constructor() {
    this.categories = [];
  }

  ngOnInit(): void {
    console.log(this.categories);
  }

  loginOutout() {
    this.onBtnClick.emit(this.btnValue);
  }
}
