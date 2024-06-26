import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServices } from './services/cart.service';
import { LoginServices } from './services/login.service';
import { LoginState } from './share/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private cartServices: CartServices,
    protected loginServices: LoginServices,
    private router: Router
  ) {}
  title = 'e-commerce';

  ngOnInit(): void {
    if (this.loginServices.hasToken()) {
      this.loginServices.loginWithToken().subscribe({
        next: ({ token, user }) => {
          this.loginServices.setLoginState(LoginState.LOGGED_IN);
          this.loginServices.setToken(token);
          this.cartServices.getSelectedProductsFromLocal();
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.loginServices.setLoginState(LoginState.NOT_LOGGED_IN);
    this.loginServices.setToken('');
  }

  protected isLoginUrl(): boolean {
    return this.router.url.endsWith('login');
  }
}
