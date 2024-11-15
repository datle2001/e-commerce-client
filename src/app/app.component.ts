import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TopComponent } from '@components/top/top.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { LocalStorageService } from './services/local-storage.service';
import { LoginService } from './services/login.service';
import { LoginState } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgIf, TopComponent, RouterOutlet, SpinnerComponent],
})
export class AppComponent implements OnInit {
  constructor(
    protected loginServices: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
  title = 'e-commerce';

  ngOnInit(): void {
    if (this.localStorageService.hasValidToken()) {
      this.loginServices.loginWithToken().subscribe({
        next: (token) => {
          this.localStorageService.setToken(token);
          this.loginServices.loginState = LoginState.LOGGED_IN;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }

  protected shouldShowTopNav(): boolean {
    return !(
      this.router.url.endsWith('login') || this.router.url.endsWith('register')
    );
  }
}
