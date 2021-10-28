import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { DISCOUNT_TYPE } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'cn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  formGrp: FormGroup;
  loading: boolean = false;
  categories: Category[] = [];
  constructor(private fb: FormBuilder, private prodtcSvc: ProductService) {
    this.prodtcSvc.getAllCategory().then((r) => {
      this.categories = r;
    });

    this.formGrp = fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      categoryId: ['', Validators.required],
      dimensions: ['', [Validators.required]],
      sizes: ['', [Validators.required]],
      price: ['', [Validators.required]],
      isDiscount: ['', [Validators.required]],
      discountRate: [''],
      discountType: [''],
      isTaxInclusive: ['', [Validators.required]],
      taxRate: [''],
      taxType: [''],
      quantity: ['', [Validators.required]],
      createdOn: ['', [Validators.required]],
      isDisabled: [''],
    });

    this.formGrp.controls['isDiscount'].valueChanges.subscribe((val) => {
      console.log(val);
      if (val === true) {
        this.formGrp.controls['discountRate'].setValidators(
          Validators.required
        );
        this.formGrp.controls['discountType'].setValidators(
          Validators.required
        );
      } else {
        this.formGrp.controls['discountRate'].clearValidators();
        this.formGrp.controls['discountType'].clearValidators();
      }

      this.formGrp.controls['discountRate'].updateValueAndValidity();
      this.formGrp.controls['discountType'].updateValueAndValidity();
    });
  }

  ngOnInit() {}

  get form() {
    return this.formGrp.controls;
  }
  cancel() {}

  createProduct() {
    console.log(this.formGrp.value);
  }
}

export const discountValidator = (
  discountTypeControl: AbstractControl,
  discountRateControl: AbstractControl
) => {
  return (control: FormGroup): ValidationErrors | null => {
    const discType = discountTypeControl.value;
    const discountRate = discountRateControl.value;
    if (!discType || !discountRate) {
      return null;
    }
    // return password === confirmPassword ? null : { passwordMismatch: true };
    if (discType == DISCOUNT_TYPE.FIXED) {
      if (discountRate) {
        return null;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
};
