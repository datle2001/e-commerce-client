import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TopComponent } from './components/top/top.component';
import { CartServices } from './services/cart.service';
import { LoginServices } from './services/login.service';
import { LoginState } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [TopComponent, RouterOutlet, NgIf],
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
