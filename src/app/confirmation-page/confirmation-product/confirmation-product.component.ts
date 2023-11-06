import { Component, Input } from '@angular/core';
import { OrderedProduct } from 'src/app/model/product/order';

@Component({
  selector: 'confirmation-product',
  templateUrl: './confirmation-product.component.html',
  styleUrls: ['./confirmation-product.component.css']
})
export class ConfirmationProductComponent {
  @Input()
  orderedProduct!: OrderedProduct
}
