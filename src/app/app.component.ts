import { Component, ViewChild } from '@angular/core';
import { LOGIN_TYPE } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginType = LOGIN_TYPE.admin;

  constructor() {}
}
