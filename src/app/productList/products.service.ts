import { Injectable } from "@angular/core";
import { ProductBoxComponent } from "./productBox/product-box.component";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Product } from "../product/product";

@Injectable({
 providedIn: 'root'
})
export class ProductServices {
 constructor(private http: HttpClient) {}

 private productUrl = 'http://localhost:8000/api/v1/products/'
 
 getProducts() : Product[] {
  let res: Product[] = [];

  this.http.get<JSON[]>(this.productUrl).subscribe({
   next: (products: JSON[]) => {
    products.forEach(prod => {
     let product = new Product()
     Object.assign(prod, product)
     res.push(product);
    })
   },
   error: (err) => {
    console.log(err);
   },
  });
  
  return res;
 }
 getProductById(code: string): Observable<JSON> {
  return this.http.get<JSON>(this.productUrl, {params: {code}})
 }
}