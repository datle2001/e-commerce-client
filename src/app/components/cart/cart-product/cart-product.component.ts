import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SelectedProduct } from 'src/app/models/selected-product';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums';
import { CartService } from '../../../services/cart.service';
import { QuantitySelectComponent } from '../../shared/quantity-select/quantity-select.component';

@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
  standalone: true,
  imports: [NgIf, QuantitySelectComponent],
})
export class CartProductComponent {
  @Input()
  selectedProduct?: SelectedProduct;
  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor(
    private cartServices: CartService,
    protected productServices: ProductService,
    private toastServices: ToastService
  ) {}

  /**
   * Triggers upon trash icon being clicked
   * @param product
   */
  protected onRemoveClick(): void {
    this.cartServices.removeProduct(this.selectedProduct!.product.id);

    this.toastServices.showToast(
      `${this.selectedProduct!.product.name} removed from your cart`,
      ToastType.SUCCESS
    );
  }

  protected setQuantitySelect(change: number): void {
    this.cartServices.addProduct({
      product: this.selectedProduct!.product,
      quantity: change,
    });
  }
}
