import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/order';
import { CartServices } from '../services/cart.service';
import { OrderServices } from '../services/order.service';
import { LoginServices } from '../services/login.service';

@Component({
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  constructor(
    private cartServices: CartServices,
    protected orderServices: OrderServices,
    private route: ActivatedRoute,
    private loginServices: LoginServices
  ) {}

  protected confirmedOrder: Order | undefined;
  protected orderId = this.route.snapshot.paramMap.get('id')!;

  ngOnInit(): void {
    this.cartServices.removeAllProducts();
    this.getOrder();
  }

  private getOrder(): void {
    this.orderServices.getOrderById(this.orderId).subscribe({
      next: (rawOrder: any[]) => {
        this.confirmedOrder = this.orderServices.initOrderFrom(rawOrder);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
