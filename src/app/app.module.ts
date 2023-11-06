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
import { BlogComponent } from './blog/blog.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductListComponent } from './productList/product-list.component';
import { ProductBoxComponent } from './productList/productBox/product-box.component';
import { S3Services } from './services/s3.service';
import { QuantitySelectComponent } from './share/quantity-select/quantity-select.component';
import { StarComponent } from './share/star/star.component';
import { SupportComponent } from './support/support.component';
import { TopComponent } from './top/top.component';
import { WelcomeComponent } from './welcome-page/welcome.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ConfirmationProductComponent } from './confirmation-page/confirmation-product/confirmation-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductBoxComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailPageComponent,
    CartComponent,
    CartProductComponent,
    StarComponent,
    QuantitySelectComponent,
    BlogComponent,
    SupportComponent,
    ConfirmationPageComponent,
    ConfirmationProductComponent,
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
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailPageComponent },
      { path: 'cart', component: CartComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'support', component: SupportComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'confirmation/:id', component: ConfirmationPageComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' }
    ]),
  ],
  providers: [S3Services],
  bootstrap: [AppComponent],
})
export class AppModule {}
