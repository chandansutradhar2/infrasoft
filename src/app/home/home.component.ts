import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { StateService } from '../state.service';
import { UserService } from '../user.service';

@Component({
  selector: 'cn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: User;
  constructor(private userSvc: UserService, private stateSvc: StateService) {
    this.user = this.userSvc.getUser();
  }

  ngOnInit(): void {
    this.userSvc.onUserChange.subscribe((r) => {
      if (r) {
        this.user = r;
      }
    });
  }

  addToCart() {
    this.stateSvc.addToCart({ name: 'New Item', price: 200, qty: 1 });
  }
}
