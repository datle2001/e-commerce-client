import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedProduct } from '../models/selected-product';
import { LocalStorageService } from './local-storage.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _selectedProducts = new BehaviorSubject<SelectedProduct[]>(
    []
  );
  readonly selectedProducts$ = this._selectedProducts.asObservable();

  constructor(
    private localStorageService: LocalStorageService,
    private productService: ProductService
  ) {
    this.getSelectedProductsFromLocalStorage();
  }

  get selectedProducts(): SelectedProduct[] {
    return this._selectedProducts.getValue();
  }

  private set selectedProducts(sp: SelectedProduct[]) {
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

  private getSelectedProductsFromLocalStorage() {
    const localSPs = this.localStorageService.getLocalSelectedProducts();

    if (localSPs && localSPs.length > 0) {
      let selectedProducts: SelectedProduct[] = [];
      const productIds = localSPs.map((lsp) => lsp.id).toString();

      this.productService.getProducts({ productIds }).subscribe({
        next: (products) => {
          products.forEach((product) => {
            selectedProducts.push({
              product,
              quantity: localSPs.find((lsp) => lsp.id === product.id)!.quantity,
            });
          });

          this.selectedProducts = selectedProducts;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
