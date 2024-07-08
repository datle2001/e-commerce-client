import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OrderedProduct } from 'src/app/models/order';

@Component({
  selector: 'confirmation-product',
  templateUrl: './confirmation-product.component.html',
  styleUrls: ['./confirmation-product.component.css'],
  standalone: true,
  imports: [NgIf]
})
export class ConfirmationProductComponent {
  @Input()
  orderedProduct?: OrderedProduct;
}
