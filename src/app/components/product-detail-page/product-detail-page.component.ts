import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums';
import { QuantitySelectComponent } from '../shared/quantity-select/quantity-select.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { StarComponent } from '../shared/star/star.component';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    NgIf,
    StarComponent,
    QuantitySelectComponent,
    MatDividerModule,
    SpinnerComponent,
  ],
})
export class ProductDetailPageComponent {
  constructor(
    private route: ActivatedRoute,
    private productServices: ProductService,
    private cartServices: CartService,
    private toastServices: ToastService
  ) {
    this.getProduct();
  }

  protected product: Product | undefined;
  private id = this.route.snapshot.paramMap.get('id')!;
  protected quantity: number = 1;

  private getProduct() {
    this.productServices.getProductById(this.id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected setQuantitySelect(change: number): void {
    this.quantity = change;
  }

  /**
   * Triggers on Add button clicked
   */
  protected onAddClick(): void {
    this.cartServices.addProduct({
      product: this.product!,
      quantity: this.quantity,
    });

    this.toastServices.showToast(
      `${this.quantity} ${this.product!.name}(s) added to your cart`,
      ToastType.SUCCESS
    );

    this.setQuantitySelect(1);
  }

  /**
   * Triggers on Star symbols clicked
   */
  protected setRating(newRating: number): void {
    this.productServices
      .updateProduct(this.id, { rating: newRating })
      .subscribe({
        next: (updatedRawProduct: any) => {
          this.toastServices.showToast(
            `Successfully rated ${updatedRawProduct.name}`,
            ToastType.SUCCESS
          );
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
