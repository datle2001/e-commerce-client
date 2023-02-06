import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Product } from 'src/app/product/product';
import { ProductBoxComponent } from 'src/app/productList/productBox/product-box.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnChanges{
  @Input()
  product!: Product;
  @Output() onRemove = new EventEmitter<Product>();
  selectedQuantity!: number
  quantityOptions: number[] = [...Array(10).keys()]

  onRemoveClick(): void {
    this.onRemove.emit(this.product)    
  }

  ngOnChanges(): void{
    if(this.product !== null) {
      this.selectedQuantity = this.product.quantityPick
    }
  }
}