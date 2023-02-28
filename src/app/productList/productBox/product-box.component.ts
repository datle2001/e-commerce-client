import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'pb-root',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input()
  product!: Product;
  quantitySelect: number = 1;

  constructor(private cartService: CartService) {}

  onAddClick(): void {
    this.cartService.addProduct(this.product, this.quantitySelect);
    this.quantitySelect = 1;
  }

  setQuantitySelect($event: number) {
    this.quantitySelect = $event;
  }
}
