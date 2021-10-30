import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { AsyncEmailValidator } from 'src/app/email-validator.service';
import { LOGIN_TYPE, User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';
import { AuthService } from '../auth.service';

//decorator -metadata
@Component({
  selector: 'cn-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  formGrp: FormGroup;
  loading: boolean = false;
  msg: string = '';
  strength!: string;
  fullName: string = 'Chandan';
  @Input() userType!: LOGIN_TYPE;
  maxTime: number = 10;
  timer: string = `you have ${this.maxTime} minutes`;
  currentTime!: Date;
  success: boolean = false;
  failure: boolean = false;
  constructor(
    private authSvc: AuthService,
    private httpClient: HttpClient,
    private router: Router,
    private asyncValidator: AsyncEmailValidator,
    private userSvc: UserService
  ) {
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

    if (this.formGrp.invalid) {
      this.msg = 'please resolve all error in the form and retry again';
      this.failure = true;
      return;
    }

    let data = this.formGrp.value;
    let user: User = {
      address: data.address,
      email: data.email,
      fullName: data.fullName,
      mobileNo: data.mobileNo,
      password: data.password,
      photoUrl: '',
      userType: this.userType,
      _id: data.email,
      createdOn: Date.now(),
      createdBy: data.email,
    };
    //todo save to database
    this.httpClient.post('http://localhost:3000/user/signup', user).subscribe(
      (res) => {
        this.success = true;
        this.failure = false;
        this.msg = 'account created successfully';
      },
      (err) => {
        this.failure = true;
        this.success = false;
        err.error.error.code == 11000
          ? (this.msg = 'email id already exists. please login')
          : (this.msg = 'server error encountered');
      }
    );
  }

  createAccount() {
    console.log(this.formGrp.value, this.userType);

    if (this.formGrp.invalid) {
      this.msg = 'please resolve all error in the form and retry again';
      this.failure = true;
      return;
    }

    this.loading = true;
    let data = this.formGrp.value;
    this.formGrp.disable();
    let user: User = {
      address: data.address,
      email: data.email,
      fullName: data.fullName,
      mobileNo: data.mobileNo,
      password: data.password,
      photoUrl: '',
      userType: LOGIN_TYPE.user,
      createdOn: Date.now(),
      createdBy: data.email,
    };
    //todo save to database

    this.authSvc
      .createAccount(user)
      .then((res: any) => {
        user._id = res.uid;
        this.httpClient
          .post('http://localhost:3000/user/signup', user)
          .subscribe(
            () => {
              this.success = true;
              this.failure = false;
              this.msg = 'account created successfully';
              localStorage.setItem('user', JSON.stringify(user));
              this.userSvc.setUser(user);
            },
            (err) => {
              this.failure = true;
              this.success = false;
              err.error.error.code == 11000
                ? (this.msg = 'email id already exists. please login')
                : (this.msg = 'server error encountered');
            }
          );
      })
      .finally(() => {
        this.formGrp.enable();
        this.loading = false;
      })
      .catch((err) => {
        if (err.code == 'auth/email-already-in-use') {
          this.msg = 'Email Already exists. Please login';
        } else {
          this.msg = err.message;
        }
        this.failure = true;
        this.success = false;
      });
  }
  close() {
    this.failure = false;
    this.success = false;
  }

  navigate() {
    this.router.navigate(['auth']);
  }
}
