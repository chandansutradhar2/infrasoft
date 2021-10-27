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
    { url: 'admin', name: 'Dashboard', icon: '' },
    { url: 'admin/seller', name: 'Manage Seller', icon: '' },
    { url: 'admin/user', name: 'Manger User', icon: '' },
    { url: 'admin/finance', name: 'Financial', icon: '' },
    { url: 'admin/om', name: 'Order Tracking', icon: '' },
    { url: 'admin/report', name: 'Reports', icon: '' },
  ];

  sellerNavCategories: NavMenu[] = [
    { url: 'seller', name: 'Dashboard', icon: '' },
    { url: 'seller/product', name: 'Product Management', icon: '' },
    { url: 'seller/order-management', name: 'Order Management', icon: '' },
    { url: 'seller/rating', name: 'Rating & Review', icon: '' },
    { url: 'seller/business', name: 'Manage Business', icon: '' },
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
    }

    this.userSvc.onUserChange.subscribe((user) => {
      this.user = user;
      //this.userSvc.setUser(this.user);
      this.setNavBar();
    });

    this.setNavBar();
  }

  setNavBar() {
    if (this.user) {
      this.btnValue = 'Logout';
      switch (this.user.userType) {
        case LOGIN_TYPE.admin:
          this.passingNavCatgories = this.adminNavCategories;
          this.router.navigate(['admin']);
          break;
        case LOGIN_TYPE.seller:
          this.passingNavCatgories = this.sellerNavCategories;
          this.router.navigate(['seller']);
          break;
        case LOGIN_TYPE.user:
          this.passingNavCatgories = this.userNavCategories;

          break;

        default:
          this.passingNavCatgories = this.userNavCategories;
          break;
      }
    } else {
      this.passingNavCatgories = this.userNavCategories;
    }
  }
  handler(ev: string) {
    if (ev == 'Login') {
      this.router.navigate(['auth']);
    } else {
      this.userSvc.logout();
      localStorage.removeItem('user');
      this.btnValue = 'Login';
    }
  }
}
