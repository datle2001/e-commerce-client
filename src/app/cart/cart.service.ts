import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../product/product";

@Injectable({
 providedIn: 'root'
})
export class CartService {
 private SELECTED_PRODUCTS_KEY = 'selectedProducts'
 selectedProducts: Product[] = []
 onSelectedProductChange: Subject<Product[]> = new Subject()

 constructor() {  
  const sp = localStorage.getItem(this.SELECTED_PRODUCTS_KEY)
  if(sp) {
   this.selectedProducts = JSON.parse(sp)
  }

  this.onSelectedProductChange.subscribe((changedSelectedProducts) => {
    this.selectedProducts = changedSelectedProducts
    console.log(this.selectedProducts);
    
  })
 }

 saveCartToLocal(): void {
  localStorage.setItem(this.SELECTED_PRODUCTS_KEY, 
   JSON.stringify(this.decycle(this.selectedProducts)))
 }

 

 addProduct(product: Product): void { 
  const target = this.selectedProducts.find((prod: Product) => prod.code === product.code)!
  
  if(!target) {
   product.quantityPick++;
   this.onSelectedProductChange.next([...this.selectedProducts, product])
  } else {
    target.quantityPick++;
    this.onSelectedProductChange.next(
        [...this.selectedProducts.filter((prod: Product) => prod.code !== target.code),
        target]
    )
  }
  
  this.saveCartToLocal()
 }
 
 decreaseProduct(product: Product): void {
  const target = this.selectedProducts.find((prod: Product) => prod.code === product.code)!
  target.quantityPick--;

  if(target.quantityPick === 0) {
   this.removeProduct(target)
  }
 }

 removeProduct(product: Product): void {
  const changedSelectedProducts = this.selectedProducts.filter((prod: Product) => prod.code !== product.code)

  this.onSelectedProductChange.next(changedSelectedProducts)
  this.saveCartToLocal()
 }

 decycle(obj: any, stack: any[] = []): any {
  if (!obj || typeof obj !== 'object')
      return obj;
  
  if (stack.includes(obj))
      return null;

  let s = stack.concat([obj]);

  return Array.isArray(obj)
      ? obj.map(x => this.decycle(x, s))
      : Object.fromEntries(
          Object.entries(obj)
              .map(([k, v]) => [k, this.decycle(v, s)]));
}

}