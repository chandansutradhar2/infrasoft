import { Component, Input } from '@angular/core';
import { LOGIN_TYPE } from 'src/app/models/user.model';

//decorator -metadata
@Component({
  selector: 'cn-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  // styles: [
  //   `
  //     background-color: red;
  //   `,
  // ],
})
export class SignupComponent {
  @Input() userType: string = LOGIN_TYPE.user;

  constructor() {}
}
