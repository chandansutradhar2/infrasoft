import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    UserProfileComponent,
  ],
  providers: [],
})
export class AuthModule {}
