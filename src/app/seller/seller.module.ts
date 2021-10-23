import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: SellerDashboardComponent,
  },
];

@NgModule({
  declarations: [
    AddProductComponent,
    SellerDashboardComponent,
    EditProductComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [AddProductComponent, EditProductComponent, RouterModule],
  providers: [],
})
export class SellerModule {}
