import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/models/seller.model';
import { SellerService } from 'src/app/seller.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'cn-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss'],
})
export class SellerDashboardComponent implements OnInit {
  seller!: Seller;
  constructor(private sellerSvc: SellerService, private userSvc: UserService) {
    let user = this.userSvc.getUser();
    user ? (this.seller = user as Seller) : null;
  }

  ngOnInit(): void {}
}
