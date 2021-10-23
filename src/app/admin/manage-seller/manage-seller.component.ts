import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'cn-manage-seller',
  templateUrl: './manage-seller.component.html',
  styleUrls: ['./manage-seller.component.scss'],
})
export class ManageSellerComponent implements OnInit {
  add: boolean = false;
  delete: boolean = false;
  edit: boolean = false;
  constructor(private userSvc: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  cancel() {}

  display(action: string) {
    switch (action) {
      case 'add':
        this.add = true;
        this.edit = false;
        this.delete = false;
        break;
      case 'delete':
        this.add = false;
        this.edit = false;
        this.delete = true;
        break;
      case 'edit':
        this.add = false;
        this.edit = true;
        this.delete = false;
        break;

      default:
        this.add = false;
        this.edit = false;
        this.delete = false;

        break;
    }
  }
}
