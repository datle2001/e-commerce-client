import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { globals } from 'src/globals';
import { Product } from '../model/product/product';
import { CartServices } from '../services/cart.service';
import { OrderServices } from '../services/order.service';
import { ToastServices } from '../services/toast.service';
import { delay as delayFor, redirectTo } from '../share/helpers';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    protected cartService: CartServices,
    private toastService: ToastServices,
    private orderServices: OrderServices,
    private router: Router
  ) {}

  /**
   * Triggers upon trash icon being clicked
   * @param product
   */
  protected onRemoveClick(product: Product): void {
    this.cartService.removeProduct(product);

    this.toastService.showSuccessToast(
      `${product.name} removed from your cart`
    );
  }

  /**
   * Triggers on Checkout button being clicked
   */
  protected onCheckOutClick(): void {
    //TODO: show a spinner here

    this.orderServices.createOrder().subscribe({
      next: (paymentLink: any) => {
        //TODO: hide the spinner here
        console.log(paymentLink['after_completion']);
        
        this.toastService.showSuccessToast(
          'Thank you for placing an order with us!',
          globals.toastLongerTimeout
        );

        delayFor(globals.toastLongerTimeout);

        //redirectTo(paymentLink.url);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  /**
   * Triggered upon Remove All button being clicked
   */
  protected onRemoveAllClick() {
    this.cartService.removeAllProducts();

    this.toastService.showSuccessToast(
      'All products have been removed from your cart'
    );
  }
}
