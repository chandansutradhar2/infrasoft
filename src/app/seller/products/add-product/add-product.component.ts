import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  frmGrp: FormGroup;
  constructor(private fb: FormBuilder) {
    this.frmGrp = fb.group({});
  }

  ngOnInit() {}
}
