import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LOGIN_TYPE } from 'src/app/models/user.model';
import { Seller } from 'src/app/models/seller.model';
import { SellerService } from 'src/app/seller.service';
import { UserService } from 'src/app/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { YesNoDialogComponent } from 'src/app/utils/yes-no-dialog/yes-no-dialog.component';
import { DialogModal } from 'src/app/models/dialog.model';

@Component({
  selector: 'cn-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formGrp: FormGroup;
  loading: boolean = false;
  @Output() onCancel: EventEmitter<null> = new EventEmitter();
  constructor(
    private userSvc: UserService,
    private sellerSvc: SellerService,
    private fb: FormBuilder,
    private modalService: NgbModal
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
    this.loading = true;
    this.formGrp.disable();
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
        //todo some feedback about success
        this.formGrp.reset();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        alert('finally invoked');
        this.loading = false;
        this.formGrp.enable();
      });
  }

  cancel() {
    if (this.formGrp.touched && this.formGrp.dirty) {
      const modalRef = this.modalService.open(YesNoDialogComponent);
      let dialog: DialogModal = {
        message:
          'There are unsaved changes in the form. you really want to exit?',
        title: 'Data loss Warning',
      };
      modalRef.componentInstance.dialog = dialog;
      modalRef.closed.subscribe((r) => {
        if (r) {
          this.onCancel.emit();
        }
      });
    } else {
      this.onCancel.emit();
    }
  }

  testLoader() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
