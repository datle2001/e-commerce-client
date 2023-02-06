import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './top/top.component';
import { FormsModule } from '@angular/forms';
import { ProductBoxComponent } from './productList/productBox/product-box.component';
import { ProductListComponent } from './productList/product-list.component';
import {MatSelectModule} from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailPageComponent } from './productDetailPage/product-detail-page.component';
import { CartComponent } from './cart/cart.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartProductComponent } from './cart/cart-product/cart-product.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductBoxComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductDetailPageComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailPageComponent},
      {path: 'cart', component: CartComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
