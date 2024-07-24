import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedProduct } from '../models/selected-product';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _selectedProducts = new BehaviorSubject<SelectedProduct[]>(
    []
  );
  readonly selectedProducts$ = this._selectedProducts.asObservable();

  constructor(private localStorageService: LocalStorageService) {}

  get selectedProducts(): SelectedProduct[] {
    return this._selectedProducts.getValue();
  }

  set selectedProducts(sp: SelectedProduct[]) {
    this._selectedProducts.next(sp);
    this.localStorageService.saveSelectedProductsToLocal(this.selectedProducts);
  }

  addProduct(selectedProduct: SelectedProduct): void {
    const target = this.selectedProducts.find(
      (sp: SelectedProduct) => sp.product.id === selectedProduct.product.id
    );

    if (target) {
      target.quantity += selectedProduct.quantity;
      this.selectedProducts = this.selectedProducts;
    } else {
      this.selectedProducts = [...this.selectedProducts, selectedProduct];
    }
  }

  removeProduct(productId: string): void {
    this.selectedProducts = this.selectedProducts.filter(
      (sp: SelectedProduct) => sp.product.id! !== productId
    );
  }

  removeAllProducts(): void {
    this.selectedProducts = [];
  }

  /**
   * Count total number of products in cart
   * @returns total number of products
   */
  countProducts(): number {    
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
