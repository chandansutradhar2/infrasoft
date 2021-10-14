import { Component, ViewChild } from '@angular/core';
import { NavMenu } from './models/menu.model';
import { LOGIN_TYPE } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginType = LOGIN_TYPE.admin;

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
    { url: '', name: 'Shop', icon: '' },
    { url: '', name: 'Features', icon: '' },
    { url: '', name: 'Blog', icon: '' },
    { url: '', name: 'About', icon: '' },
    { url: '', name: 'Contact', icon: '' },
  ];
  constructor() {}
}
