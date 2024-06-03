import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { CartServices } from '../services/cart.service';
import { ProductServices } from '../services/product.service';
import { ToastServices } from '../services/toast.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.css'],
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
    this.product!.quantityPick = quantitySelect;
  }

  protected resetQuantitySelect() {
    this.product!.quantityPick = 1;
  }

  /**
   * Triggers on Add button clicked
   */
  protected onAddClick(): void {
    this.cartServices.addProduct(this.product!);

    this.toastServices.showSuccessToast(
      `${this.product!.quantityPick} ${
        this.product!.name
      }(s) added to your cart`
    );

    this.resetQuantitySelect();
  }

  /**
   * Triggers on Star symbols clicked
   */
  protected setRating(newRating: number): void {
    this.productServices
      .updateProduct(this.id, { rating: newRating })
      .subscribe({
        next: (updatedRawProduct: any) => {
          this.toastServices.showSuccessToast(
            `Successfully rated ${updatedRawProduct.name}`
          );
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
