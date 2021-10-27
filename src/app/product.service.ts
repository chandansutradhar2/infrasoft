import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addCategory(category: Category) {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.apiUrl + 'product/category/create', category)
        .subscribe(
          (r: any) => {
            if (r.status) {
              resolve(r._id);
            } else {
              reject(r.error);
            }
          },
          (err) => reject(err)
        );
    });
  }

  deleteCategory() {}

  disableCateory() {}

  updateCategory() {}
}
