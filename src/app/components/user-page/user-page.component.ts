import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { SpinnerComponent } from '@components/shared/spinner/spinner.component';
import { User } from 'src/app/models/user';
import { LoginServices } from 'src/app/services/login.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ToastServices } from 'src/app/services/toast.service';
import { UserServices } from 'src/app/services/user.service';
import { ToastType } from 'src/app/shared/enums';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    SpinnerComponent,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
})
export class UserPageComponent implements OnInit {
  constructor(
    protected loginServices: LoginServices,
    private toastServices: ToastServices,
    private router: Router,
    private userServices: UserServices,
    private spinnerService: SpinnerService,
  ) {}

  protected user: User | undefined;

  ngOnInit(): void {
    if (this.loginServices.hasLoggedIn()) {
      this.spinnerService.show = true;
      this.userServices
        .getUser()
        .subscribe({
          next: (user) => {
            this.spinnerService.show = false;
            this.user = user;
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  onLoginLinkClick() {
    this.spinnerService.show = true;
    this.toastServices.showToast(
      'Redirecting you to Login page...',
      ToastType.WARNING
    ).subscribe({
      next: () => {
        this.spinnerService.show = false;
        this.router.navigateByUrl('login');
      },
    });
  }
}
