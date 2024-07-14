import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SelectedProduct } from 'src/app/models/selected-product';
import { ProductServices } from 'src/app/services/product.service';
import { CartServices } from '../../../services/cart.service';
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
  @Output() onRemove = new EventEmitter<Product>();
  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor(
    private cartServices: CartServices,
    protected productServices: ProductServices
  ) {}

  protected onRemoveClick(): void {
    this.onRemove.emit(this.selectedProduct!.product);
  }

  protected setQuantitySelect($event: number) {
    this.selectedProduct!.quantity = $event;
    this.cartServices.saveSelectedProductsToLocal();
  }
}
