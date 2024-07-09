import { Component } from '@angular/core';
import '@angular/forms';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInfo } from 'src/app/models/loginInfo';
import { LoginServices } from 'src/app/services/login.service';
import { ToastServices } from 'src/app/services/toast.service';
import { LoginState, ToastType } from 'src/app/shared/enums';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../../theme.scss'],
  standalone: true,
  imports: [SpinnerComponent, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule]
})
export class LoginPageComponent {
  constructor(
    protected loginServices: LoginServices,
    private router: Router,
    private toastServices: ToastServices
  ) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
