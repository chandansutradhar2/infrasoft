import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { DemoComponent } from './demo/demo.component';
import { AvatarComponent } from './avatar/avatar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './shop/cart/cart.component';
import { ProductComponent } from './product/product.component';

// localization modules
import { NgHttpLoaderModule } from 'ng-http-loader';

//datatable module
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//angular fire module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

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
    CartComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgHttpLoaderModule.forRoot(),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
