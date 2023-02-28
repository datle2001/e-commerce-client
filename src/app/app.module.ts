import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './top/top.component';
import { FormsModule } from '@angular/forms';
import { ProductBoxComponent } from './productList/productBox/product-box.component';
import { ProductListComponent } from './productList/product-list.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailPageComponent } from './productDetailPage/product-detail-page.component';
import { CartComponent } from './cart/cart.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CartProductComponent } from './cart/cart-product/cart-product.component';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './share/star/star.component';
import { MatDividerModule } from '@angular/material/divider';
import { QuantitySelectComponent } from './share/quantity-select/quantity-select.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './blog/blog.component';
import { SupportComponent } from './support/support.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
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
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
