import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  providers: [],
})
export class AuthModule {}
