import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenu } from './models/menu.model';
import { LOGIN_TYPE } from './models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginType = LOGIN_TYPE.user;
  btnValue: string = 'Login';
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
    this.userSvc.onUserChange.subscribe((user) => {
      if (user) {
        this.btnValue = 'Logout';
        switch (user.userType) {
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
    });
  }

  handler(ev: string) {
    alert(ev);
    if (ev == 'Login') {
      this.router.navigate(['login']);
    } else {
      this.userSvc.logout();
    }
  }
}
