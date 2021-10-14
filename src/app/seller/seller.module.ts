import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

@NgModule({
  declarations: [AddProductComponent, EditProductComponent],
  imports: [CommonModule],
  exports: [AddProductComponent, EditProductComponent],
  providers: [],
})
export class SellerModule {}
