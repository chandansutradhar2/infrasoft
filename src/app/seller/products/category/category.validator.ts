import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';

@Injectable({ providedIn: 'root' })
export class CategoryExistValidator implements AsyncValidator {
  constructor(private productSvc: ProductService) {
    console.log('CategoryExistVAlidator invoked');
    console.log(this.productSvc);
  }

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> {
    return this.productSvc.checkCategory(ctrl.value).then(
      (isExist) => {
        return isExist ? { exists: true } : null;
      },
      (err) => {
        return of(null);
      }
    );
  }
}
