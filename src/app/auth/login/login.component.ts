import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'cn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGrp: FormGroup;
  success: boolean = false;
  failure: boolean = false;
  msg: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private userSvc: UserService,
    private authSvc: AuthService
  ) {
    this.formGrp = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  get form() {
    return this.formGrp.controls;
  }

  ngOnInit(): void {}

  login() {
    if (this.formGrp.invalid) {
      this.msg = 'please enter email/password';
      this.failure = true;
      return;
    }

    this.http
      .post('http://localhost:3000/user/login', this.formGrp.value)
      .subscribe(
        (r: any) => {
          this.msg = 'Welcome Back ' + r.user.fullName;
          this.userSvc.setUser(r.user);
          localStorage.setItem('user', JSON.stringify(r.user));
          this.success = true;
          this.failure = false;
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
        },
        (err) => {
          this.msg = err.error;
          this.success = false;
          this.failure = true;
        }
      );
  }

  loginWithEmail() {
    if (this.formGrp.invalid) {
      this.msg = 'please enter email/password';
      this.failure = true;
      return;
    }

    this.authSvc
      .loginWithEmail(
        this.formGrp.get('email')?.value,
        this.formGrp.get('password')?.value
      )
      .then((r) => {
        console.log(r);
        //his.msg = 'Welcome Back ' + r.user.fullName;
        //this.userSvc.setUser(r.user);
        //localStorage.setItem('user', JSON.stringify(r.user));
        this.success = true;
        this.failure = false;
        //  setTimeout(() => {
        //    this.router.navigate(['']);
        //  }, 2000);
      })
      .catch((err) => {
        if (err.code == 'auth/user-not-found') {
          this.msg = "Email doesn't exists";
        } else {
          this.msg = 'invalid credentials';
        }
        this.success = false;
        this.failure = true;
      });
  }
  close() {
    this.failure = false;
    this.success = false;
  }

  navigate() {
    this.router.navigate(['auth/signup']);
  }
}
