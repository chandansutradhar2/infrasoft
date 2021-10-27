import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as env from '../environments/environment';
import { Seller } from './models/seller.model';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  insertSeller(seller: Seller) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/seller/create', seller).subscribe(
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

  getAllSeller(): Promise<Seller[]> {
    return new Promise((resolve, reject) => {
      this.http.get(env.environment.apiUrl + 'seller/all').subscribe(
        (r: any) => {
          if (r.sellers && r.sellers.length > 0) {
            resolve(r.sellers);
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
