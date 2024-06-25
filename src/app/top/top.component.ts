import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartServices } from '../services/cart.service';
import { LoginServices } from '../services/login.service';
import { LoginState, ToastType } from '../share/enums';
import { ToastServices } from '../services/toast.service';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  constructor(
    protected cartServices: CartServices,
    protected loginServices: LoginServices,
    private router: Router,
    private toastServices: ToastServices
  ) {}

  protected headerImageLink = `${environment.googleStorageURL}/image-header/`;

  ngOnInit(): void {}

  protected onAccountLogoClick() {
    if (this.loginServices.hasLoggedIn()) {
      this.loginServices.logout().subscribe({
        next: () => {
          this.loginServices.deleteToken();
          this.toastServices.showToast('You have successfully logged out', ToastType.SUCCESS);
          this.loginServices.setLoginState(LoginState.NOT_LOGGED_IN)
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
