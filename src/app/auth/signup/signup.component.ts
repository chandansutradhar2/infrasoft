import { HttpClient } from '@angular/common/http';
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
  strength!: string;
  fullName: string = 'Chandan';
  @Input() userType!: LOGIN_TYPE;
  maxTime: number = 10;
  timer: string = `you have ${this.maxTime} minutes`;
  currentTime!: Date;
  constructor(private httpClient: HttpClient) {
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
        Validators.pattern(/^[A-Za-z\s]+$/),
      ]),
    });

    this.currentTime = new Date();
    this.remainingTime();

    // this.formGrp.controls['password'].valueChanges.subscribe(
    //   (value: string) => {
    //     if (value.length < 6) {
    //       this.strength = 'Weak';
    //     } else if (value.length >= 6 && value.length < 10) {
    //       this.strength = 'Average';
    //     } else if (value.length >= 10) {
    //       this.strength = 'Strong';
    //     } else {
    //       this.strength = 'Weak';
    //     }
    //   }
    // );
  }

  public get form() {
    return this.formGrp.controls;
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
    console.log(this.formGrp.value, this.userType);

    if (this.formGrp.invalid) return;

    let data = this.formGrp.value;
    let user: User = {
      address: data.address,
      email: data.email,
      fullName: data.fullName,
      mobileNo: data.mobileNo,
      password: data.password,
      photoUrl: '',
      userType: this.userType,
      id: data.email,
    };
    //todo save to database
    this.httpClient.post('http://localhost:3000/user/signup', user).subscribe(
      (res) => {
        console.log('account created successfully');
      },
      (err) => {
        console.log('error encountered', err);
      }
    );
  }
}
