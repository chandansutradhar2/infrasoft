import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { ProductService } from 'src/app/product.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'cn-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  formGrp: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,
    private productSvc: ProductService
  ) {
    this.formGrp = fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  cancel() {}

  createCategory() {
    if (this.formGrp.invalid) {
      return;
    }

    this.loading = true;
    let category: Category = {
      createdBy: this.userSvc.getUser().id || '',
      description: this.formGrp.controls['description'].value,
      name: this.formGrp.controls['name'].value,
      imageUrl: '',
    };

    this.productSvc
      .addCategory(category)
      .then((_id: any) => {
        category._id = _id;
        alert('categry added successfully');
        this.formGrp.reset();
      })
      .finally(() => {
        this.loading = false;
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }
}
