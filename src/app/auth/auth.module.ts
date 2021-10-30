import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbAlertModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AuthModule {}
