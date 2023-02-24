import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Product } from "../product/product";

@Injectable({
 providedIn: 'root'
})
export class ProductServices {
 constructor(private http: HttpClient) {}

 private productUrl = 'http://localhost:8000/api/v1/products';
 
 getProducts() : Product[] {
  let res: Product[] = [];

  this.http.get<any>(this.productUrl).subscribe({
   next: (products: any) => {
    products.forEach((prod: any) => {
     let product = new Product(
      prod.name,
      prod.price,
      prod.description,
      prod.photoUrl,
      prod.rating,
      prod.quantityInStock,
      0,
      prod.code)
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