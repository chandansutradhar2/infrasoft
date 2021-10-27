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
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SpinnerButtonComponent } from './utils/spinner-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DemoComponent,
    AvatarComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogComponent,
    FeaturesComponent,
    ShopComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
