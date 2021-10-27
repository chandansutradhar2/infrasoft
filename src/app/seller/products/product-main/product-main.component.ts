import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cn-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent implements OnInit {
  viewcategory: boolean = false;
  viewproduct: boolean = true;
  addproduct: boolean = false;
  addcategory: boolean = false;
  links = [
    { title: 'One', fragment: 'one' },
    { title: 'Two', fragment: 'two' },
  ];
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {}

  changeView(name: string) {
    if (name == 'viewcategory') {
      this.addcategory = false;
      this.addproduct = false;
      this.viewcategory = true;
      this.viewproduct = false;
    } else if (name == 'viewproduct') {
      this.addcategory = false;
      this.addproduct = false;
      this.viewcategory = false;
      this.viewproduct = true;
    } else if (name == 'addproduct') {
      this.addcategory = false;
      this.addproduct = true;
      this.viewcategory = false;
      this.viewproduct = false;
    } else if (name == 'addcategory') {
      this.addcategory = true;
      this.addproduct = false;
      this.viewcategory = false;
      this.viewproduct = false;
    }
  }
}
