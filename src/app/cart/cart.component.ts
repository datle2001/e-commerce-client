import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { globals } from 'src/globals';
import { Product } from '../model/product';
import { CartServices } from '../services/cart.service';
import { OrderServices } from '../services/order.service';
import { ToastServices } from '../services/toast.service';
import { delay as delayFor, redirectTo } from '../share/helpers';
import { OrderState, ToastType } from '../share/enums';
import { LoginServices } from '../services/login.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    protected cartService: CartServices,
    private toastService: ToastServices,
    protected orderServices: OrderServices,
    private router: Router,
    private loginServices: LoginServices
  ) {}

  /**
   * Triggers upon trash icon being clicked
   * @param product
   */
  protected onRemoveClick(product: Product): void {
    this.cartService.removeProduct(product);

    this.toastService.showToast(
      `${product.name} removed from your cart`,
      ToastType.SUCCESS
    );
  }

  /**
   * Triggers on Checkout button being clicked
   */
  protected onCheckOutClick(): void {
    if(this.loginServices.hasLoggedIn()) {
      this.orderServices.setOrderState(OrderState.SUBMITTING);

      this.orderServices.createOrder().subscribe({
        next: (paymentLink: any) => {
          this.orderServices.setOrderState(OrderState.SUBMITTED);

          this.toastService.showToast(
            'Thank you for placing an order with us!',
            ToastType.SUCCESS,
            globals.toastLongerTimeout
          );

          delayFor(globals.toastLongerTimeout);

          redirectTo(paymentLink.url);
        },
        error: (error) => {
          this.orderServices.setOrderState(OrderState.NOT_SUBMIITED);
          console.log(error);
        },
      });
    } else {
      this.toastService.showToast('You need to login to place orders.', ToastType.WARNING)
    }
  }

  /**
   * Triggered upon Remove All button being clicked
   */
  protected onRemoveAllClick() {
    this.cartService.removeAllProducts();

    this.toastService.showToast(
      'All products have been removed from your cart',
      ToastType.SUCCESS
    );
  }
}
