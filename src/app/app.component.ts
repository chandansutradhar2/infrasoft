import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenu } from './models/menu.model';
import { LOGIN_TYPE, User } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginType = LOGIN_TYPE.user;
  btnValue: string = 'Login';
  user!: User;
  passingNavCatgories: NavMenu[] = [];

  adminNavCategories: NavMenu[] = [
    { url: '', name: 'Dashboard', icon: '' },
    { url: '', name: 'Manage Seller', icon: '' },
    { url: '', name: 'Manger User', icon: '' },
    { url: '', name: 'Financial', icon: '' },
    { url: '', name: 'Order Tracking', icon: '' },
    { url: '', name: 'Reports', icon: '' },
  ];

  sellerNavCategories: NavMenu[] = [
    { url: '', name: 'Dashboard', icon: '' },
    { url: '', name: 'Add Product', icon: '' },
    { url: '', name: 'Delete Product', icon: '' },
    { url: '', name: 'Order Management', icon: '' },
    { url: '', name: 'Rating & Review', icon: '' },
    { url: '', name: 'Manage Business', icon: '' },
  ];

  userNavCategories: NavMenu[] = [
    { url: '', name: 'Home', icon: '' },
    { url: 'shop', name: 'Shop', icon: '' },
    { url: 'feature', name: 'Features', icon: '' },
    { url: 'blog', name: 'Blog', icon: '' },
    { url: 'about', name: 'About', icon: '' },
    { url: 'contact', name: 'Contact', icon: '' },
  ];
  constructor(private userSvc: UserService, private router: Router) {
    let tmp = localStorage.getItem('user');

    if (tmp) {
      this.user = JSON.parse(tmp);
      this.userSvc.setUser(this.user);
      this.setNavBar();
    }

    this.userSvc.onUserChange.subscribe((user) => {
      this.user = user;
      this.userSvc.setUser(this.user);
      this.setNavBar();
    });
  }

  setNavBar() {
    if (this.user) {
      this.btnValue = 'Logout';
      switch (this.user.userType) {
        case LOGIN_TYPE.admin:
          this.passingNavCatgories = this.adminNavCategories;

          break;
        case LOGIN_TYPE.seller:
          this.passingNavCatgories = this.sellerNavCategories;
          break;
        case LOGIN_TYPE.user:
          this.passingNavCatgories = this.userNavCategories;
          break;

        default:
          this.passingNavCatgories = this.userNavCategories;
          break;
      }
    }
  }
  handler(ev: string) {
    if (ev == 'Login') {
      this.router.navigate(['login']);
    } else {
      this.userSvc.logout();
    }
  }
}
