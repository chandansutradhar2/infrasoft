import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LOGIN_TYPE, User } from './models/user.model';
import * as env from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  insertSeller(seller: User) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/user/signup', seller).subscribe(
        (res) => {
          if (res) {
            resolve(true);
          } else {
            reject('unable to create seller');
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  deleteSeller() {}

  getAllSeller(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      this.http.get(env.environment.apiUrl + 'user/getAllSeller').subscribe(
        (r: any) => {
          if (r.sellers && r.sellers.length > 0) {
            let res: User[] = r.sellers as User[];
            let sellers: User[] = [];
            sellers = res.filter((ele) => ele.userType == LOGIN_TYPE.seller);
            resolve(sellers);
          } else {
            reject('no sellers found');
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  updateSeller() {
    return new Promise((resolve, reject) => {});
  }

  disableSeller() {
    return new Promise((resolve, reject) => {});
  }
}
