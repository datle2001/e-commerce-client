import { Component } from '@angular/core';
import '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInfo } from 'src/app/models/loginInfo';
import { LoginServices } from 'src/app/services/login.service';
import { ToastServices } from 'src/app/services/toast.service';
import { LoginState, ToastType } from 'src/app/shared/enums';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    protected loginServices: LoginServices,
    private router: Router,
    private toastServices: ToastServices
  ) {}

  loginInfo: LoginInfo = this.loginServices.loginInfo;

  protected onSubmit() {
    this.loginServices.setLoginState(LoginState.LOGGING_IN);
    this.handleLoginObservable(this.loginServices.login());
  }

  private handleLoginObservable(observable: Observable<any>): void {
    observable.subscribe({
      next: ({ token, user }) => {
        this.loginServices.setLoginState(LoginState.LOGGED_IN);
        this.loginServices.setToken(token);
        this.router.navigate(['/']);
      },
      error: ({ headers, error }) => {
        this.loginServices.setLoginState(LoginState.NOT_LOGGED_IN);

        if (error.message === 'Invalid Credentials') {
          this.toastServices.showToast(
            'We cannot find your credentials',
            ToastType.ERROR
          );
        }

        console.log(error);
      },
    });
  }
}
