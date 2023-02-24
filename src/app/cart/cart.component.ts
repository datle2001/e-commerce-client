import { Component } from '@angular/core';
import { Product } from '../product/product';
import { CartService } from './cart.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(protected cartService: CartService) {}

  getTotalQuant(): number {
    return this.cartService.selectedProducts.reduce((sum, product) => sum + product.quantityPick, 0)
  }

  onRemoveClick(product: Product) {
    this.cartService.removeProduct(product)
  }

  onCheckOutClick() {
    this.cartService.createCheckout()
  }

  onRemoveAllClick() {
    this.cartService.removeAll();
  }
}
