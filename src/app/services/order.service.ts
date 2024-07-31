import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order, OrderedProduct } from '../models/order';
import { OrderState } from '../shared/enums';
import { CartService } from './cart.service';
import { LoginServices } from './login.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class OrderServices {
  constructor(
    private cartServices: CartService,
    private http: HttpClient,
    private loginServices: LoginServices,
    private spinnerService: SpinnerService
  ) {}

  private orderUrl = `${environment.api.url}/orders`;
  private orderState: OrderState = OrderState.NOT_SUBMIITED;

  /**
   * Get an order from API by id
   * @param orderId
   * @returns
   */
  getOrderById(orderId: string): Observable<any> {
    return this.http
      .get<any>(`${this.orderUrl}/${orderId}`, {
        headers: this.loginServices.getHeaders(),
      })
      .pipe(take(1));
  }

  /**
   * Create an order
   * @returns
   */
  createOrder(): Observable<any> {
    return this.http
      .post(this.orderUrl, this.cartServices.selectedProducts, {
        headers: this.loginServices.getHeaders(),
      })
      .pipe(take(1));
  }

  initOrderFrom(rawOrder: any[]): Order {
    let order = new Order();

    rawOrder.forEach((rawOrderedProduct) => {
      let product = { ...rawOrderedProduct.product };

      let orderedProduct: OrderedProduct = {
        product,
        canFulfill: rawOrderedProduct.can_fulfill,
        quantity: rawOrderedProduct.ordered_quantity,
      };

      order.orderedProducts.push(orderedProduct);
    });

    order.calculateAllCharges();

    return order;
  }

  public setOrderState(orderState: OrderState): void {
    this.orderState = orderState;
  }

  public getOrderState(): OrderState {
    return this.orderState;
  }

  public isOrderSubmitting(): boolean {
    return this.orderState == OrderState.SUBMITTING;
  }
}
