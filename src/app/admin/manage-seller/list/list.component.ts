import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/seller.service';

@Component({
  selector: 'cn-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  show: boolean = false;
  rows: any[] = [];
  msg: string = '';
  columns = [
    { prop: '_id', name: '_id' },
    { prop: 'fullName', name: 'Owner Full Name' },
    { prop: 'businessName', name: 'Business Name' },
    { prop: 'mobileNo', name: 'Mobile No' },
  ];
  constructor(private sellerSvc: SellerService) {
    this.sellerSvc.getAllSeller().then(
      (r) => {
        this.rows = r;
      },
      (err) => {
        this.msg = err;
      }
    );
  }

  ngOnInit(): void {}
}
