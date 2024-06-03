import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServices } from 'src/app/services/cart.service';
import { ToastServices } from 'src/app/services/toast.service';

@Component({
  selector: 'pb-root',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  constructor(
    private cartService: CartServices,
    private toastService: ToastServices
  ) {}

  @Input()
  product!: Product;

  /**
   * Triggers on Add button clicked
   */
  onAddClick(): void {
    this.cartService.addProduct(this.product);

    this.toastService.showSuccessToast(
      `${this.product.quantityPick} ${this.product.name}(s) added to your cart`
    );

    this.resetQuantitySelect();
  }

  setQuantitySelect(quantitySelect: number) {
    this.product.quantityPick = quantitySelect;
  }

  resetQuantitySelect() {
    this.product.quantityPick = 1;
  }
}
