import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';

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

  updateSeller() {}

  disableSeller() {}
}
