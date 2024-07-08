import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartServices } from 'src/app/services/cart.service';
import { LoginServices } from 'src/app/services/login.service';
import { OrderServices } from 'src/app/services/order.service';
import { ToastServices } from 'src/app/services/toast.service';
import { OrderState, ToastType } from 'src/app/shared/enums';
import { redirectTo } from 'src/app/shared/helpers';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { NgFor, NgIf } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { CartProductComponent } from './cart-product/cart-product.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [SpinnerComponent, NgIf, MatDividerModule, NgFor, CartProductComponent, MatButtonModule, RouterLink]
})
export class CartComponent {
  constructor(
    protected cartServices: CartServices,
    private toastServices: ToastServices,
    protected orderServices: OrderServices,
    private loginServices: LoginServices
  ) {}

  /**
   * Triggers upon trash icon being clicked
   * @param product
   */
  protected onRemoveClick(product: Product): void {
    this.cartServices.removeProduct(product.id);

    this.toastServices.showToast(
      `${product.name} removed from your cart`,
      ToastType.SUCCESS
    );
  }

  /**
   * Triggers on Checkout button being clicked
   */
  protected onCheckoutClick(): void {
    if (this.loginServices.hasLoggedIn()) {
      this.orderServices.setOrderState(OrderState.SUBMITTING);

      this.orderServices.createOrder().subscribe({
        next: ({url}) => {          
          this.orderServices.setOrderState(OrderState.SUBMITTED);

          this.toastServices.showToast(
            'Thank you for placing an order with us!',
            ToastType.SUCCESS,
          ).onHidden.subscribe({
            next: () => {
              redirectTo(url);
            }
          });
        },
        error: (error) => {
          this.orderServices.setOrderState(OrderState.NOT_SUBMIITED);
          console.log(error);
        },
      });
    } 
    else {
      this.toastServices.showToast(
        'You need to login to place orders.',
        ToastType.WARNING,
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
