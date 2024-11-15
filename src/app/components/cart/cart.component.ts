import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderServices } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';
import { OrderState, ToastType } from 'src/app/shared/enums';
import { redirectTo } from 'src/app/shared/helpers';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { CartProductComponent } from './cart-product/cart-product.component';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [
    SpinnerComponent,
    NgFor,
    NgIf,
    MatDividerModule,
    CartProductComponent,
    MatButtonModule,
    RouterLink,
  ],
})
export class CartComponent {
  constructor(
    protected cartServices: CartService,
    private toastServices: ToastService,
    protected orderServices: OrderServices,
    private loginServices: LoginService
  ) {}

  /**
   * Triggers on Checkout button being clicked
   */
  protected onCheckoutClick(): void {
    if (this.loginServices.hasLoggedIn()) {
      this.orderServices.createOrder().subscribe({
        next: ({ url }) => {
          this.orderServices.setOrderState(OrderState.SUBMITTED);

          this.toastServices
            .showToast(
              'Thank you for placing an order with us!',
              ToastType.SUCCESS
            )
            .subscribe({
              next: () => {
                redirectTo(url);
              },
            });
        },
        error: (error) => {
          this.orderServices.setOrderState(OrderState.NOT_SUBMIITED);
          console.log(error);
        },
      });
    } else {
      this.toastServices.showToast(
        'You need to login to place orders.',
        ToastType.WARNING
      );
    }
  }

  /**
   * Triggered upon Remove All button being clicked
   */
  protected onRemoveAllClick() {
    this.cartServices.removeAllProducts();

    this.toastServices.showToast(
      'All products have been removed from your cart',
      ToastType.SUCCESS
    );
  }
}
