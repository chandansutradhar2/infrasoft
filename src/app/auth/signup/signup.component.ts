import { Component } from '@angular/core';

@Component({
  selector: 'cn-signup',
  templateUrl: './signup.component.html',
  // styleUrls: ['./signup.component.scss'],
  styles: [
    `
      background-color: red;
    `,
  ],
})
export class SignupComponent {
  constructor() {
    alert('signup loaded');
  }
}
