import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { S3Services } from './services/s3.service';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { ConfirmationProductComponent } from './components/confirmation-page/confirmation-product/confirmation-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductBoxComponent } from './components/products-page/product-box/product-box.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { SupportComponent } from './components/support/support.component';
import { TopComponent } from './components/top/top.component';
import { QuantitySelectComponent } from './components/shared/quantity-select/quantity-select.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { StarComponent } from './components/shared/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductBoxComponent,
    ProductsPageComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    CartComponent,
    CartProductComponent,
    StarComponent,
    QuantitySelectComponent,
    SupportComponent,
    ConfirmationPageComponent,
    ConfirmationProductComponent,
    LoginPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsPageComponent },
      { path: 'products/:id', component: ProductDetailPageComponent },
      { path: 'cart', component: CartComponent },
      { path: 'support', component: SupportComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'confirmation/:id', component: ConfirmationPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  providers: [S3Services],
  bootstrap: [AppComponent],
})
export class AppModule {}
