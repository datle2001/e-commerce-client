import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import '@angular/forms';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { LoginServices } from 'src/app/services/login.service';
import { ToastServices } from 'src/app/services/toast.service';
import { LoginState, ToastType } from 'src/app/shared/enums';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../../../theme.scss'],
  standalone: true,
  imports: [
    SpinnerComponent,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnDestroy {
  private destroyed = new Subject<void>();
  protected readonly loginFormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    protected loginServices: LoginServices,
    private router: Router,
    private toastServices: ToastServices,
    private spinnerService: SpinnerService  ) {}

  protected onSubmit() {
    this.spinnerService.show = true;
    this.loginServices
      .login({
        email: this.loginFormGroup.controls.email.value!,
        password: this.loginFormGroup.controls.password.value!,
      })
      .subscribe({
        next: (token) => {
          this.spinnerService.show = false;
          this.loginServices.loginUser(token);
          this.toastServices
            .showToast('You have logged in successfully', ToastType.SUCCESS)
            .subscribe({
              next: () => {
                this.router.navigate(['/']);
              }
            });
        },
        error: ({ headers, error }) => {
          this.spinnerService.show = false;
          
          if (error.message === 'Invalid Credentials') {
            this.toastServices.showToast(
              'We cannot find your credentials',
              ToastType.ERROR
            );
          }

          console.error(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
