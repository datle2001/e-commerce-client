import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { decycle } from "../helper/object";
import { Product } from "../product/product";

@Injectable({
 providedIn: 'root'
})
export class CartService {
  private SELECTED_PRODUCTS_KEY = 'selectedProducts'
  private CHECKOUT_URL = 'http://localhost:8000/api/stripe/'
  selectedProducts: Product[] = []
  private onSelectedProductChange: Subject<Product[]> = new Subject()

  constructor(private http: HttpClient, private router: Router) {  
    const savedSelectedProducts = localStorage.getItem(this.SELECTED_PRODUCTS_KEY)
    
    if(savedSelectedProducts) {
      this.selectedProducts = JSON.parse(savedSelectedProducts)
    }

    this.onSelectedProductChange.subscribe((changedSelectedProducts) => {
      this.selectedProducts = changedSelectedProducts   
      this.saveCartToLocal() 
    })
  }

  saveCartToLocal(): void {
    localStorage.setItem(this.SELECTED_PRODUCTS_KEY, 
    JSON.stringify(decycle(this.selectedProducts)))
  }

  addProduct(product: Product): void { 
    const target = this.selectedProducts.find((prod: Product) => prod.code === product.code)!

    if(!target) {
      product.quantityPick++;
      this.onSelectedProductChange.next([...this.selectedProducts, product])
    } else {
      target.quantityPick++;
      this.onSelectedProductChange.next(this.selectedProducts)
    }
  }

  removeProduct(product: Product): void {
    const changedSelectedProducts = this.selectedProducts.filter((prod: Product) => prod.code !== product.code)

    this.onSelectedProductChange.next(changedSelectedProducts)
  }
  removeAll(): void {
    this.onSelectedProductChange.next([]);
  }

  createCheckout() : void {    
    this.http.post(this.CHECKOUT_URL, this.selectedProducts).subscribe({
      next: (res:any) => {
        this.removeAll()
        this.router.navigate(['/products'])
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}