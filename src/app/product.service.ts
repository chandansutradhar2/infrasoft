import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

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

  addProduct(product: Product) {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiUrl + 'product/create', product).subscribe(
        (r: any) => {
          if (r.status) {
            resolve(r._id);
            console.log(r._id);
          } else {
            reject(r.error);
          }
        },
        (err) => reject(err)
      );
    });
  }

  checkCategory(categoryName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post(environment.apiUrl + 'product/category/check', {
          name: categoryName,
        })
        .subscribe(
          (r: any) => {
            resolve(r.status);
          },
          (err) => reject(err)
        );
    });
  }

  getAllCategory(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'product/category/all').subscribe(
        (r: any) => {
          if (r.status == true && r.categories.length > 0) {
            resolve(r.categories);
          } else {
            reject('no categories found');
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getAllProduct(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiUrl + 'product/all').subscribe(
        (r: any) => {
          if (r.status == true && r.products.length > 0) {
            resolve(r.products);
          } else {
            reject('no products found');
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  deleteCategory() {}

  disableCateory() {}

  updateCategory() {}
}
