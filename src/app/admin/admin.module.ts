import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ManageSellerComponent } from './manage-seller/manage-seller.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { FinanceComponent } from './finance/finance.component';
import { OmComponent } from './om/om.component';
import { ReportComponent } from './report/report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './manage-seller/list/list.component';
import { AddComponent } from './manage-seller/add/add.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'seller',
    component: ManageSellerComponent,
  },
  {
    path: 'user',
    component: ManageUserComponent,
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
  {
    path: 'om',
    component: OmComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ManageSellerComponent,
    ManageUserComponent,
    FinanceComponent,
    OmComponent,
    ReportComponent,
    ListComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
