/// <reference types="@angular/localize" />

import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { ProductDetailPageComponent } from '@components/product-detail-page/product-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@components/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@components/products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'products/:id',
    component: ProductDetailPageComponent,
    // loadComponent: () =>
    //   import(
    //     '@components/product-detail-page/product-detail-page.component'
    //   ).then((m) => m.ProductDetailPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@components/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('@components/support-page/support-page.component').then(
        (m) => m.SupportComponent
      ),
  },
  {
    path: 'confirmation/:id',
    loadComponent: () =>
      import('@components/confirmation-page/confirmation-page.component').then(
        (m) => m.ConfirmationPageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@components/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('@components/user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    provideHttpClient()
  ],
}).catch((err) => console.log(err));
