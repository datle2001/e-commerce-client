import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';
import { LoginServices } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient, private loginServices: LoginServices) {}

  private productsUrl = `${environment.api.url}/products`;

  /**
   * Get all products from API
   * @returns an array of products
   */
  getProducts(): Observable<Array<JSON>> {
    return this.http.get<Array<JSON>>(this.productsUrl);
  }

  /**
   * Get a product from API by id
   * @param id
   * @returns a single product
   */
  getProductById(id: string): Observable<JSON> {
    return this.http.get<JSON>(`${this.productsUrl}/${id}`);
  }

  /**
   * Initialize a Product from *rawProduct*
   * @param rawProduct
   * @returns
   */
  initProductFrom(rawProduct: any): Product {
    // create a Product instance
    let product = new Product(
      rawProduct.id,
      rawProduct.name,
      rawProduct.price,
      rawProduct.description,
      `${environment.googleStorageURL}/products/${rawProduct.photo_key}`,
      rawProduct.rating,
      rawProduct.num_rating
    );

    return product;
  }

  updateProduct(id: string, productUpdateDetail = {}): Observable<Object> {
    return this.http.patch(`${this.productsUrl}/${id}`, productUpdateDetail, {
      headers: this.loginServices.getHeaders(),
    });
  }
}
