import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LOGIN_TYPE } from 'src/app/models/user.model';
import { Seller } from 'src/app/models/seller.model';
import { SellerService } from 'src/app/seller.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'cn-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formGrp: FormGroup;
  @Output() onCancel: EventEmitter<null> = new EventEmitter();
  constructor(
    private userSvc: UserService,
    private sellerSvc: SellerService,
    private fb: FormBuilder
  ) {
    this.formGrp = fb.group({
      businessName: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
    });
  }

  get form() {
    return this.formGrp.controls;
  }

  ngOnInit(): void {}

  createSeller() {
    if (this.formGrp.invalid) {
      alert('form is incomplete');
      return;
    }

    let data = this.formGrp.value;
    let seller: Seller = {
      address: data.address,
      email: data.email,
      fullName: data.fullName,
      mobileNo: data.mobileNo,
      password: data.password,
      businessName: data.businessName,
      photoUrl: '',
      userType: LOGIN_TYPE.seller,
      id: data.email,
      createdOn: Date.now(),
      createdBy: this.userSvc.getUser().id,
    };
    this.sellerSvc
      .insertSeller(seller)
      .then(() => {
        alert('seller registered successfully');
        this.formGrp.reset();
      })
      .catch((err) => alert(err));
  }

  cancel() {
    this.onCancel.emit();
  }
}
