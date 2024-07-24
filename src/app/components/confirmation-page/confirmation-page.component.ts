import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderServices } from 'src/app/services/order.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ConfirmationProductComponent } from './confirmation-product/confirmation-product.component';

@Component({
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
  standalone: true,
  imports: [SpinnerComponent, NgFor, NgIf, ConfirmationProductComponent],
})
export class ConfirmationPageComponent implements OnInit {
  constructor(
    private cartServices: CartService,
    protected orderServices: OrderServices,
    private route: ActivatedRoute
  ) {}

  protected confirmedOrder: Order | undefined;
  protected orderId: string = '';

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id')!;
    this.cartServices.removeAllProducts();
    this.getOrder();
  }

  private getOrder(): void {
    this.orderServices.getOrderById(this.orderId).subscribe({
      next: (rawOrder: any[]) => {
        console.log(rawOrder);

        this.confirmedOrder = this.orderServices.initOrderFrom(rawOrder);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
