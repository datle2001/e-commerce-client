import { Routes } from '@angular/router';
import { ProductsPageComponent } from '@components/products-page/products-page.component';
import { SupportPageComponent } from '@components/support-page/support-page.component';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('@components/products-page/products-page.component').then(
        (m) => m.ProductsPageComponent
      ),
  },
  {
    path: 'products/:id',
    // component: ProductDetailPageComponent,
    loadComponent: () =>
      import(
        '@components/product-detail-page/product-detail-page.component'
      ).then((m) => m.ProductDetailPageComponent),
  },
  {
    path: 'cart',
    // component: CartComponent,
    loadComponent: () =>
      import('@components/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('@components/support-page/support-page.component').then(
        (m) => m.SupportPageComponent
      ),
  },
  {
    path: 'confirmation/:id',
    // component: ConfirmationPageComponent,
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
    // component: LoginPageComponent,
  },
  {
    path: 'user',
    loadComponent: () =>
      import('@components/user-page/user-page.component').then(
        (m) => m.UserPageComponent
      ),
  },
  {
    path: 'home',
    // component: HomePageComponent,
    loadComponent: () =>
      import('@components/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
    path: '**', 
    loadComponent: () => 
      import('@components/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent
    )
  }
];
