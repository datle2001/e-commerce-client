import { Injectable } from '@angular/core';
import { SelectedProduct } from '../models/selected-product';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly SELECTED_PRODUCTS_KEY: string = 'selected-products';
  private readonly TOKEN_KEY: string = 'token';

  saveSelectedProductsToLocal(selectedProducts: SelectedProduct[]): void {
    const storageProducts: StorageProduct[] = selectedProducts.map((sp) => {
      return { id: sp.product.id, quantity: sp.quantity };
    });

    localStorage.setItem(
      this.SELECTED_PRODUCTS_KEY,
      JSON.stringify(storageProducts)
    );
  }

  getLocalSelectedProducts(): StorageProduct[] | null {
    const rawStorageProducts = localStorage.getItem(this.SELECTED_PRODUCTS_KEY);

    if (rawStorageProducts) {
      const storageProducts: StorageProduct[] = JSON.parse(rawStorageProducts);

      return storageProducts;
    }

    return null;
  }

  public setToken(token: Token) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  public deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public getToken(): Token | null {
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY)!);
  }

  public hasValidToken(): boolean {
    const token = this.getToken();

    if (token && Date.parse(token.expireBy) > Date.now()) {
      return true;
    }

    this.deleteToken();
    return false;
  }
}

export interface StorageProduct {
  id: string;
  quantity: number;
}
