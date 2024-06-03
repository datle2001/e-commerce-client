import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  constructor(private http: HttpClient) {}

  private productUrl = `${environment.api.url}/products`;

  /**
   * Get all products from API
   * @returns an array of products
   */
  getProducts(): Observable<Array<JSON>> {
    return this.http.get<Array<JSON>>(this.productUrl, {
      headers: environment.api.headers,
    });
  }

  /**
   * Get a product from API by id
   * @param id
   * @returns a single product
   */
  getProductById(id: string): Observable<JSON> {
    return this.http.get<JSON>(`${this.productUrl}/${id}`, {
      headers: environment.api.headers,
    });
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
    return this.http.patch(`${this.productUrl}/${id}`, productUpdateDetail, {
      headers: environment.api.headers,
    });
  }
}
