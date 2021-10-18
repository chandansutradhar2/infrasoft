import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthModule } from '../app/auth/auth.module';
import { SellerModule } from '../app/seller/seller.module';
import { DemoComponent } from './demo/demo.component';
import { AvatarComponent } from './avatar/avatar.component';
@NgModule({
  declarations: [AppComponent, NavBarComponent, DemoComponent, AvatarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SellerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
