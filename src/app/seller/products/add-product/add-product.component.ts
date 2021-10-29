import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { DISCOUNT_TYPE, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product.service';
import { UserService } from 'src/app/user.service';
import { discountValidator } from './discount.validator';

@Component({
  selector: 'cn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  formGrp: FormGroup;
  loading: boolean = false;
  categories: Category[] = [];
  constructor(
    private fb: FormBuilder,
    private prodtcSvc: ProductService,
    private userSvc: UserService
  ) {
    this.prodtcSvc.getAllCategory().then((r) => {
      this.categories = r;
    });

    this.formGrp = fb.group(
      {
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        categoryId: ['', Validators.required],
        dimensions: fb.array([]),
        batchNo: ['', [batchValidator]],
        sizes: ['', [Validators.required]],
        price: ['', [Validators.required]],
        isDiscount: [''],
        discountRate: [''],
        discountType: [''],
        isTaxExclusive: [''],
        taxRate: [''],
        taxType: [''],
        quantity: ['', [Validators.required]],
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

    this.formGrp.controls['isTaxExclusive'].valueChanges.subscribe((val) => {
      if (val === true) {
        this.formGrp.controls['taxRate'].setValidators(Validators.required);
        this.formGrp.controls['taxType'].setValidators(Validators.required);
      } else {
        this.formGrp.controls['taxRate'].clearValidators();
        this.formGrp.controls['taxType'].clearValidators();
      }

      this.formGrp.controls['taxRate'].updateValueAndValidity();
      this.formGrp.controls['taxType'].updateValueAndValidity();
    });
  }

  get dimensions() {
    return this.formGrp.controls['dimensions'] as FormArray;
  }

  addDimension() {
    const dimensionForm = this.fb.group({
      height: ['', Validators.required],
      width: ['', Validators.required],
      length: [''],
      weight: [''],
      measurementType: '',
    });

    this.dimensions.push(dimensionForm);
  }

  deleteDimension(index: number) {
    this.dimensions.removeAt(index);
  }
  ngOnInit() {}

  get form() {
    return this.formGrp.controls;
  }

  cancel() {}

  createProduct() {
    if (this.formGrp.invalid) {
      return;
    }
    let data = this.formGrp.value;
    this.loading = true;
    this.formGrp.disable();
    let product: Product = {
      categoryId: data.categoryId,
      createdBy: this.userSvc.getUser().id || '',
      createdOn: Date.now(),
      description: data.description,
      dimensions: data.dimensions,
      discountRate: data.discountRate,
      discountType: data.discountType,
      isDisabled: data.isDisabled || false,
      isDiscount: data.isDiscount || false,
      isTaxExclusive: data.isTaxExclusive || false,
      name: data.name,
      owner: this.userSvc.getUser().id || '',
      price: data.price,
      quantity: data.quantity,
      sizes: data.sizes,
      taxRate: data.taxRate,
      taxType: data.taxType,
      imageUrls: [],
      videoUrls: [],
    };

    this.prodtcSvc
      .addProduct(product)
      .then(() => {
        alert('product added successfully');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.formGrp.reset();
        this.loading = false;
        this.formGrp.enable();
      });
    console.log(product);
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
