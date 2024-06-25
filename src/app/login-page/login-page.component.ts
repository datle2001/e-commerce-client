import { Component, OnInit } from '@angular/core';
import '@angular/forms';
import { LoginInfo } from '../model/loginInfo';
import { LoginServices } from '../services/login.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { LoginState, ToastType } from '../share/enums';
import { ToastServices } from '../services/toast.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(protected loginServices: LoginServices, private router: Router, private toastServices: ToastServices) {}

  protected loginInfo: LoginInfo = this.loginServices.loginInfo;

  onSubmit() {
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
      error: ({headers, error}) => {
        this.loginServices.setLoginState(LoginState.NOT_LOGGED_IN);

        if(error.message === 'Invalid Credentials') {
          this.toastServices.showToast('We cannot find your credentials', ToastType.ERROR)
        }

        console.log(error);
      },
    });
  }
}
