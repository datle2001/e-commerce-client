import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectedProduct } from '../models/selected-product';
import { decycle } from '../shared/helpers';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private SELECTED_PRODUCTS_KEY: string = 'selected-products';
  selectedProducts: SelectedProduct[] = [];
  private onSelectedProductChange: Subject<SelectedProduct[]> = new Subject();

  constructor() {
    this.setTriggerOnSelectedProductsChange();
  }

  /**
   * Save selected products to local storage
   */
  saveSelectedProductsToLocal(): void {
    localStorage.setItem(
      this.SELECTED_PRODUCTS_KEY,
      JSON.stringify(decycle(this.selectedProducts))
    );
  }

  /**
   * Get selected products from local storage (if any)
   */
  getSelectedProductsFromLocalStorage(): void {
    const savedSelectedProducts = localStorage.getItem(
      this.SELECTED_PRODUCTS_KEY
    );

    if (savedSelectedProducts) {
      this.selectedProducts = JSON.parse(savedSelectedProducts);
    }
  }

  /**
   * Set a trigger that works when selected products change. Save newly selected
   * products to local storage.
   */
  private setTriggerOnSelectedProductsChange(): void {
    this.onSelectedProductChange.subscribe((changedSelectedProducts) => {
      this.selectedProducts = changedSelectedProducts;

      this.saveSelectedProductsToLocal();
    });
  }

  /**
   * Add *quantitySelect* *product* to cart
   * @param product
   * @param quantitySelect
   */
  addProduct(selectedProduct: SelectedProduct): void {
    const target = this.selectedProducts.find(
      (sp: SelectedProduct) => sp.product.id === selectedProduct.product.id
    );

    if (!target) {
      this.onSelectedProductChange.next([
        ...this.selectedProducts,
        selectedProduct,
      ]);
    } else {
      target.quantity += selectedProduct.quantity;
      this.onSelectedProductChange.next(this.selectedProducts);
    }
  }

  /**
   * Remove *product* from cart
   * @param product
   */
  removeProduct(productId: string): void {
    const changedSelectedProducts = this.selectedProducts.filter(
      (sp: SelectedProduct) => sp.product.id! !== productId
    );

    this.onSelectedProductChange.next(changedSelectedProducts);
  }

  /**
   * Remove all products from cart
   */
  removeAllProducts(): void {
    this.onSelectedProductChange.next([]);
  }

  /**
   * Count total number of products in cart
   * @returns total number of products
   */
  countProducts(): number {
    console.log('count products');

    return this.selectedProducts.reduce((sum, sp) => sum + sp.quantity, 0);
  }

  /**
   * Get a subtotal price of customer's cart
   * @returns subtotal price
   */
  getSubtotal(): number {
    return this.selectedProducts.reduce(
      (sum, sp) => sum + sp.product.price! * sp.quantity,
      0
    );
  }
}
