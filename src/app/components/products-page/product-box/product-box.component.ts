import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Product } from 'src/app/models/product';
import { CartServices } from 'src/app/services/cart.service';
import { ToastServices } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums';
import { QuantitySelectComponent } from '../../shared/quantity-select/quantity-select.component';
import { StarComponent } from '../../shared/star/star.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'pb-root',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
  standalone: true,
  imports: [MatButtonModule, RouterLink, StarComponent, QuantitySelectComponent, MatDividerModule]
})
export class ProductBoxComponent {
  constructor(
    private cartService: CartServices,
    private toastService: ToastServices
  ) {}

  @Input()
  product!: Product;
  protected quantity: number = 1;

  /**
   * Triggers on Add button clicked
   */
  onAddClick(): void {
    this.cartService.addProduct({product: this.product, quantity: this.quantity});
    
    this.toastService.showToast(
      `${this.quantity} ${this.product.name}(s) added to your cart`,
      ToastType.SUCCESS
    );

    this.setQuantitySelect(1);
  }

  setQuantitySelect(quantitySelect: number) {
    this.quantity = quantitySelect;
  }
}
