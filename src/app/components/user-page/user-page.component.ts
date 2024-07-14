import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { SpinnerComponent } from '@components/shared/spinner/spinner.component';
import { ActiveToast } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LoginServices } from 'src/app/services/login.service';
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
  ],
})
export class UserPageComponent implements OnInit {
  constructor(
    protected loginServices: LoginServices,
    private toastServices: ToastServices,
    private router: Router,
    private userServices: UserServices
  ) {}

  protected displaySpinner: boolean = false;
  protected user: User | undefined;

  ngOnInit(): void { 
    if(this.loginServices.hasToken()) {
      this.displaySpinner = true;
      this.userServices.getUser().subscribe({
        next: (user) => {
          this.displaySpinner = false;
          this.user = user;
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  onLoginLinkClick() {
    const toast: ActiveToast<any> = this.toastServices.showToast(
      'Redirecting you to Login page...',
      ToastType.WARNING
    );

    toast.onShown.subscribe({
      next: () => {
        this.displaySpinner = true;
      },
    });

    toast.onHidden.subscribe({
      next: () => {
        this.displaySpinner = false;
        this.router.navigateByUrl('login');
      },
    });
  }
}
