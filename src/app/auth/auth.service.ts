import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private aFauth: AngularFireAuth) {}

  loginWithEmail(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.aFauth.signInWithEmailAndPassword(email, password).then(
        (r) => {
          resolve(r);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  logout() {}

  createAccount(user: User) {
    return new Promise((resolve, reject) => {
      this.aFauth
        .createUserWithEmailAndPassword(user.email, user.password || '')
        .then(
          (r) => {
            console.log(r);
            resolve(r.user);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  loginWithFacebook() {}

  loginWithGoogle() {}
}
