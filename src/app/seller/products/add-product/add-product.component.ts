import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
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

    this.formGrp = fb.group(
      {
        name: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.minLength(100)]],
        categoryId: ['', Validators.required],
        dimensions: ['', [Validators.required]],
        batchNo: ['', [batchValidator]],
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
      },
      {
        validators: discountValidator,
      }
    );

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

function batchValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value;
  if (!value) {
    return null;
  }
  let batchNo = value.includes('BN');
  return batchNo ? null : { batchError: true };
}

export const identityRevealedValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const name = control.get('name');
  const alterEgo = control.get('alterEgo');

  return name && alterEgo && name.value === alterEgo.value
    ? { identityRevealed: true }
    : null;
};

export const discountValidator: ValidatorFn = (
  fGroup: AbstractControl
): ValidationErrors | null => {
  const discRate = fGroup.get('discountRate')?.value;
  const discType = fGroup.get('discountType')?.value;
  const price = fGroup.get('price')?.value;
  if (!discType || !discRate || !price) {
    return null;
  }
  if (discType == DISCOUNT_TYPE.FIXED) {
    return discRate <= price ? null : { discountFixedError: true };
  } else if (discType == DISCOUNT_TYPE.PERCENTAGE) {
    return discRate <= 100 ? null : { discountPercentError: true };
  } else {
    return null;
  }
};
