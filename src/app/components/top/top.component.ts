import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { CartServices } from 'src/app/services/cart.service';
import { LoginServices } from 'src/app/services/login.service';
import { ToastServices } from 'src/app/services/toast.service';
import { LoginState, ToastType } from 'src/app/shared/enums';
import { environment } from 'src/environments/environment';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  standalone: true,
  imports: [MatIconModule, NgIf, MatBadgeModule, MatMenuModule, MatButtonModule, RouterLink],
})
export class TopComponent implements OnInit, OnDestroy {
  constructor(
    protected cartServices: CartServices,
    protected loginServices: LoginServices,
    private router: Router,
    private toastServices: ToastServices,
    private breakpointObserver: BreakpointObserver
  ) {}

  destroyed = new Subject<void>();
  protected headerImageLink = `${environment.googleStorageURL}/image-header/`;
  protected condenseIcons: boolean = false;
  protected condenseNavLinks: boolean = false;
  protected numProducts: number | undefined;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            switch (query) {
              case Breakpoints.XSmall:
                this.condenseNavLinks = true;
                this.condenseIcons = true;
                break;
              case Breakpoints.Small:
                this.condenseIcons = true;
                this.condenseNavLinks = false;
                break;
              case Breakpoints.Medium:
              case Breakpoints.Large:
              case Breakpoints.XLarge:
                this.condenseNavLinks = false;
                this.condenseIcons = false;
                break;
              default:
                break;
            }
          }
        }
      });
  }

  protected onAccountLogoClick() {
    if (this.loginServices.hasLoggedIn()) {
      this.loginServices.logout().subscribe({
        next: () => {
          this.loginServices.deleteToken();
          this.toastServices.showToast(
            'You have successfully logged out',
            ToastType.SUCCESS
          );
          this.loginServices.setLoginState(LoginState.NOT_LOGGED_IN);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
