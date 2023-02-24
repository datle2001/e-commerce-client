import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductBoxComponent } from 'src/app/productList/productBox/product-box.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent{
  @Input()
  product!: Product
  @Output() onRemove = new EventEmitter<Product>()
  quantityOptions: number[] = Array.from({length: 10}, (_, i) => i + 1)

  constructor(private cartService: CartService) {}
  onRemoveClick(): void {
    this.onRemove.emit(this.product)    
  }

  onQuantityChange() {
    this.cartService.saveCartToLocal();
  }
}