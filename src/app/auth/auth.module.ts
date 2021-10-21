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

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbAlertModule],
  exports: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  providers: [],
})
export class AuthModule {}
