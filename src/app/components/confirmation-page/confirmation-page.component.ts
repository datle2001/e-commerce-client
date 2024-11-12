import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderServices } from 'src/app/services/order.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ConfirmationProductComponent } from './confirmation-product/confirmation-product.component';
import { catchError, filter, map, Observable, of, switchMap, tap } from 'rxjs';

@Component({
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
  standalone: true,
  imports: [SpinnerComponent, CommonModule, ConfirmationProductComponent],
})
export class ConfirmationPageComponent {
  constructor(
    private cartServices: CartService,
    protected orderServices: OrderServices,
    private route: ActivatedRoute
  ) {}

  protected orderId$ = this.route.paramMap.pipe(
    map((params) => params.get('id'))
  );

  protected confirmedOrder$: Observable<Order | undefined> = this.orderId$.pipe(
    filter((id) => Boolean(id)),
    switchMap((id) => this.orderServices.getOrderById(id!)),
    tap(() => this.cartServices.removeAllProducts()),
    map((order) => this.orderServices.initOrderFrom(order)),
    catchError((err) => {
      console.error(err);
      return of(undefined);
    })
  );
}