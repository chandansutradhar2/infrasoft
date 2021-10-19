import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LOGIN_TYPE, User } from 'src/app/models/user.model';

//decorator -metadata
@Component({
  selector: 'cn-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  // styles: [
  //   `
  //     background-color: red;exit
  //   `,
  // ],
})
export class SignupComponent {
  formGrp: FormGroup;

  fullName: string = 'Chandan';
  @Input() userType: string = LOGIN_TYPE.user;
  maxTime: number = 10;
  timer: string = `you have ${this.maxTime} minutes`;
  currentTime!: Date;
  constructor() {
    this.formGrp = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormControl('', [Validators.minLength(20)]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
    });

    this.currentTime = new Date();
    this.remainingTime();
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
    console.log(this.formGrp.value);
    // let user: User = {
    //   email: this.email.value,
    //   address:this.formGrp.controls['address'].value
    // }
  }
}
