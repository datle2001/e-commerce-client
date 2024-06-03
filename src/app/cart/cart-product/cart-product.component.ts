import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartServices } from '../../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input()
  product!: Product;
  @Output() onRemove = new EventEmitter<Product>();
  quantityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  constructor(private cartService: CartServices) {}
  protected onRemoveClick(): void {
    this.onRemove.emit(this.product);
  }

  protected setQuantitySelect($event: number) {
    this.product.quantityPick = $event;
    this.cartService.saveSelectedProductsToLocal();
  }
}
