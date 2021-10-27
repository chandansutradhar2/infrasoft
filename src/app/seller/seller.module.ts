import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { OrderMgmtComponent } from './order-mgmt/order-mgmt.component';
import { RatingMgmtComponent } from './rating-mgmt/rating-mgmt.component';
import { BusinessMgmtComponent } from './business-mgmt/business-mgmt.component';
import { ProductMainComponent } from './products/product-main/product-main.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: SellerDashboardComponent,
  },
  {
    path: 'product',
    component: ProductMainComponent,
  },
  {
    path: 'order-management',
    component: OrderMgmtComponent,
  },
  {
    path: 'rating',
    component: RatingMgmtComponent,
  },
  {
    path: 'business',
    component: BusinessMgmtComponent,
  },
];

@NgModule({
  declarations: [
    AddProductComponent,
    SellerDashboardComponent,
    EditProductComponent,
    OrderMgmtComponent,
    RatingMgmtComponent,
    BusinessMgmtComponent,
    ProductMainComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbDropdownModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [AddProductComponent, EditProductComponent, RouterModule],
  providers: [],
})
export class SellerModule {}
