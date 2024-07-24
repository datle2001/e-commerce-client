import { Injectable } from "@angular/core";
import { decycle } from '../shared/helpers';
import { SelectedProduct } from "../models/selected-product";
import { Token } from "../models/token";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly SELECTED_PRODUCTS_KEY: string = 'selected-products';
  private readonly TOKEN_KEY: string = 'token';

  saveSelectedProductsToLocal(selectedProducts: SelectedProduct[]): void {
    const localSPs: LocalSelectedProduct[] = selectedProducts.map((sp) => 
      { 
        return { productId: sp.product.id, quantity: sp.quantity } 
      }
    );

    localStorage.setItem(this.SELECTED_PRODUCTS_KEY, JSON.stringify(localSPs));
  }

  getSelectedProductsFromLocalStorage(): SelectedProduct[] | null {
    const stringSPs = localStorage.getItem(this.SELECTED_PRODUCTS_KEY);

    if (stringSPs) {
      const localSPs: LocalSelectedProduct[] = JSON.parse(stringSPs);
    }

    return null;
  }

  public setToken(token: Token) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  public deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public getToken(): Token | null{
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY)!);
  }

  public hasValidToken(): boolean {
    const token = this.getToken();
    
    if(token && Date.parse(token.expireBy) > Date.now()) {
      return true;
    }

    this.deleteToken();
    return  false;
  };
}

interface LocalSelectedProduct {
  productId: string,
  quantity: number
}