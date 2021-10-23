import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'cn-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formGrp: FormGroup;
  constructor(private userSvc: UserService, private fb: FormBuilder) {
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

  createSeller() {}

  cancel() {}
}
