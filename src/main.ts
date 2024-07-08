/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationPageComponent } from '@components/confirmation-page/confirmation-page.component';

export const routes: Routes = [
  { path: 'products', 
    loadComponent: () => import('@components/products-page/products-page.component').then((m) => m.ProductsPageComponent) 
  },
  { path: 'products/:id', 
    loadComponent: () => import('@components/product-detail-page/product-detail-page.component').then((m) => m.ProductDetailPageComponent)  
  },
  { path: 'cart', 
    loadComponent: () => import('@components/cart/cart.component').then((m) => m.CartComponent )
  },
  { path: 'support',
    loadComponent: () => import('@components/support-page/support-page.component').then((m) => m.SupportComponent)
  },
  { path: 'confirmation/:id', component: ConfirmationPageComponent,
    // loadComponent: () => import('@components/confirmation-page/confirmation-page.component').then((m) => m.ConfirmationPageComponent) 
  },
  { path: 'login',
    loadComponent: () => import('@components/login-page/login-page.component').then((m) => m.LoginPageComponent)
  },
  {
    path: 'user',
    loadComponent: () => import('@components/user-page/user-page.component').then((m) => m.UserPageComponent)
  },
  { path: '', 
    loadComponent: () => import('@components/home-page/home-page.component').then((m) => m.HomePageComponent) 
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
    provideHttpClient(),
  ],
}).catch((err) => console.log(err));
