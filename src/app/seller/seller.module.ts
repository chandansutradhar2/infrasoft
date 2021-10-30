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
import { CategoryComponent } from './products/category/category.component';
import { AddCategoryComponent } from './products/category/add-category/add-category.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      { path: 'add-category', component: AddCategoryComponent },
      {
        path: 'view-category',
        component: CategoryComponent,
      },
      {
        path: 'list-product',
        component: ListProductComponent,
      },
    ],
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AddProductComponent,
    SellerDashboardComponent,
    EditProductComponent,
    OrderMgmtComponent,
    RatingMgmtComponent,
    BusinessMgmtComponent,
    ProductMainComponent,
    CategoryComponent,
    AddCategoryComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [AddProductComponent, EditProductComponent, RouterModule],
  providers: [TranslateService, TranslateStore],
})
export class SellerModule {}
