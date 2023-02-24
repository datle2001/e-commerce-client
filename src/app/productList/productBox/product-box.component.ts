import { Component, Host, Input } from "@angular/core";
import { CartService } from "src/app/cart/cart.service";
import { Product } from "src/app/product/product";

@Component({
 selector: 'p-root',
 templateUrl: './product-box.component.html',
 styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
 @Input()
 product!: Product;

 constructor(private cartService: CartService) {}

 onAddClick(): void {
  this.cartService.addProduct(this.product)
 }
}