import { Product } from './product';

export class Order {
  constructor(
    public orderedProducts: OrderedProduct[] = [],
    public orderTime: string = '',
    public subtotal: number = 0,
    public shippingFee: number = 9.95,
    public tax: number = 8.75,
    public taxFee: number = 0,
    public totalCharge: number = 0
  ) {}

  calculateAllCharges(): void {
    this.calculateSubtotal();
    this.calculateTaxFee();
    this.calculateTotalCharge();
  }

  private calculateSubtotal(): void {
    this.orderedProducts.forEach((orderedProduct) => {
      if (orderedProduct.canFulfill) {
        this.subtotal +=
          orderedProduct.product.price! * orderedProduct.quantity;
      }
    });
  }

  private calculateTaxFee() {
    this.taxFee = Math.round(this.tax * this.subtotal) / 100;
  }

  private calculateTotalCharge() {
    this.totalCharge = this.subtotal + this.shippingFee + this.taxFee;
  }
}

export interface OrderedProduct {
  product: Product,
  canFulfill: boolean,
  quantity: number
}
