import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartServices } from 'src/app/services/cart.service';
import { ProductServices } from 'src/app/services/product.service';
import { ToastServices } from 'src/app/services/toast.service';
import { ToastType } from 'src/app/shared/enums';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { MatDividerModule } from '@angular/material/divider';
import { QuantitySelectComponent } from '../shared/quantity-select/quantity-select.component';
import { StarComponent } from '../shared/star/star.component';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, NgIf, StarComponent, QuantitySelectComponent, MatDividerModule, SpinnerComponent]
})
export class ProductDetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productServices: ProductServices,
    private cartServices: CartServices,
    private toastServices: ToastServices
  ) {}

  protected product: Product | undefined;
  protected id = this.route.snapshot.paramMap.get('id')!;
  protected quantity: number = 1;

  ngOnInit(): void {
    this.getProduct();
  }

  /**
   * Call to ProductServices to get a product
   */
  protected getProduct() {
    this.productServices.getProductById(this.id).subscribe({
      next: (rawProduct) => {
        this.product = this.productServices.initProductFrom(rawProduct);
      },
      error: (error) => {
        console.log(error);
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
      `${this.quantity} ${
        this.product!.name
      }(s) added to your cart`,
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
