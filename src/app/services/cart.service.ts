import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';
import { decycle } from '../shared/helpers';

@Injectable({
  providedIn: 'root',
})
export class CartServices {
  private SELECTED_PRODUCTS_KEY: string = 'selected-products';
  selectedProducts: Product[] = [];
  private onSelectedProductChange: Subject<Product[]> = new Subject();

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
  getSelectedProductsFromLocal(): void {
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
  addProduct(product: Product): void {
    const target = this.selectedProducts.find(
      (prod: Product) => prod.id === product.id
    )!;

    if (!target) {
      this.onSelectedProductChange.next([
        ...this.selectedProducts,
        Product.clone(product),
      ]);
    } else {
      target.quantityPick += product.quantityPick;
      this.onSelectedProductChange.next(this.selectedProducts);
    }
  }

  /**
   * Remove *product* from cart
   * @param product
   */
  removeProduct(product: Product): void {
    const changedSelectedProducts = this.selectedProducts.filter(
      (prod: Product) => prod.id !== product.id
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
    return this.selectedProducts.reduce(
      (sum, product) => sum + product.quantityPick,
      0
    );
  }

  /**
   * Get a subtotal price of customer's cart
   * @returns subtotal price
   */
  getSubtotal(): number {
    return this.selectedProducts.reduce(
      (sum, product) => sum + product.price * product.quantityPick,
      0
    );
  }
}
