import { Component } from '@angular/core';

@Component({
  selector: 'cn-signup',
  template: `<p>signup works!</p>
    <div></div>`,
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor() {
    alert('signup loaded');
  }
}
