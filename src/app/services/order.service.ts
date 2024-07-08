import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order, OrderedProduct } from '../models/order';
import { OrderState } from '../shared/enums';
import { CartServices } from './cart.service';
import { LoginServices } from './login.service';
import { ProductServices } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderServices {
  constructor(
    private cartServices: CartServices,
    private http: HttpClient,
    private productServices: ProductServices,
    private loginServices: LoginServices
  ) {}

  private orderUrl = `${environment.api.url}/orders`;
  private orderState: OrderState = OrderState.NOT_SUBMIITED;

  /**
   * Get an order from API by id
   * @param orderId
   * @returns
   */
  getOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.orderUrl}/${orderId}`, {
      headers: this.loginServices.getHeaders(),
    });
  }

  /**
   * Create an order
   * @returns
   */
  createOrder(): Observable<any> {
    console.log(this.cartServices.selectedProducts);
    
    return this.http.post(this.orderUrl, this.cartServices.selectedProducts, {
      headers: this.loginServices.getHeaders(),
    });
  }

  initOrderFrom(rawOrder: any[]): Order {
    let order = new Order();

    rawOrder.forEach((rawOrderedProduct) => {
      let product = this.productServices.initProductFrom(
        rawOrderedProduct.product
      );
      let orderedProduct = new OrderedProduct(
        product,
        rawOrderedProduct.can_fulfill,
        rawOrderedProduct.ordered_quantity
      );

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
