import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    NgIf,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
  ],
})
export class TopComponent implements OnInit, OnDestroy {
  private destroyed = new Subject<void>();
  protected headerImageLink = `${environment.googleStorageURL}/image-header/`;
  protected condenseIcons: boolean = false;
  protected condenseNavLinks: boolean = false;
  protected numProducts: number = 0;

  constructor(
    protected cartServices: CartService,
    protected loginServices: LoginService,
    private router: Router,
    private toastServices: ToastService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
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

    this.cartServices.selectedProducts$
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: () => {
          this.numProducts = this.cartServices.countProducts();
        },
      });
  }

  protected onAccountLogoClick() {
    if (this.loginServices.hasLoggedIn()) {
      this.loginServices.logout().subscribe({
        next: (message) => {
          this.toastServices.showToast(message, ToastType.SUCCESS);
          this.loginServices.logoutUser();
        },
        error: (error) => {
          console.error(error);
        },
      });
    } else {
      this.toastServices
        .showToast('Redirecting you to Login page', ToastType.WARNING)
        .subscribe({
          next: () => {
            this.router.navigate(['/login']);
          },
        });
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
