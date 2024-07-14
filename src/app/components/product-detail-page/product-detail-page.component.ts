import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartServices } from 'src/app/services/cart.service';
import { ProductServices } from 'src/app/services/product.service';
import { ToastServices } from 'src/app/services/toast.service';
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
    private productServices: ProductServices,
    private cartServices: CartServices,
    private toastServices: ToastServices
  ) {
    this.getProduct()
  }

  protected product: Product | undefined;
  private id = this.route.snapshot.paramMap.get('id')!;
  protected quantity: number = 1;

  private getProduct() {
    this.productServices.getProductById(this.id).subscribe({
      next: (product) => {
        this.product = product;
        this.productServices.updatePhotoUrl(this.product);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  protected setQuantitySelect(quantitySelect: number) {
    this.quantity = quantitySelect;
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
