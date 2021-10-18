import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // password: FormControl;
  // fullName: FormControl;
  // address: FormControl;

  @Input() userType: string = LOGIN_TYPE.user;
  maxTime: number = 10;
  timer: string = `you have ${this.maxTime} minutes`;
  currentTime!: Date;
  constructor() {
    this.currentTime = new Date();
    this.remainingTime();
    this.email.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }

  remainingTime() {
    setInterval(() => {
      this.maxTime = this.maxTime - 1;
      this.timer = `you have ${this.maxTime} minutes`;
      this.printTimeLeft();
    }, 60000);
  }

  printTimeLeft(): string {
    return this.timer;
  }

  signup() {
    console.log(this.email.value);
  }
}
