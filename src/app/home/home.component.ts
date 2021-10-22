import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'cn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user!: User;
  constructor(private userSvc: UserService) {
    this.user = this.userSvc.getUser();
  }

  ngOnInit(): void {
    this.userSvc.onUserChange.subscribe((r) => {
      if (r) {
        this.user = r;
      }
    });
  }
}
