import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = `${environment.api.url}/products`;

  constructor(private http: HttpClient, private loginServices: LoginService) {}

  getProducts(requestParams: {
    pageSize?: number;
    pageIndex?: number;
    productIds?: string;
  }): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsUrl, { params: requestParams })
      .pipe(take(1));
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(take(1));
  }

  updateProduct(id: string, productUpdateDetail = {}): Observable<Object> {
    return this.http
      .patch(`${this.productsUrl}/${id}`, productUpdateDetail, {
        headers: this.loginServices.getHeaders(),
      })
      .pipe(take(1));
  }
}
