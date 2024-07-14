import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { LoginServices } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private readonly _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products.asObservable();

  private readonly _pageIndex: BehaviorSubject<number> = new BehaviorSubject(0);
  readonly pageIndex$ = this._pageIndex.asObservable();

  pageSize: number = 15;
  private productsUrl = `${environment.api.url}/products`;

  constructor(private http: HttpClient, private loginServices: LoginServices) {
    this.pageIndex$.subscribe({
      next: (pageIndex) => {        
        this.getProducts();
      },
    });
  }

  get products(): Product[] {
    return this._products.getValue();
  }

  set products(products: Product[]) {
    this._products.next(products);
  }

  get pageIndex() {
    return this._pageIndex.getValue();
  }

  set pageIndex(pageIndex: number) {
    this._pageIndex.next(pageIndex);
  }

  /**
   * Get all products from API
   * @returns an array of products
   */
  getProducts(): void {    
    this.http
      .get<Product[]>(this.productsUrl, {
        params: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex + 1,
        },
      })
      .subscribe({
        next: (products) => {
          products.forEach((product) => {
            this.updatePhotoUrl(product);
          });

          this.products = products;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  /**
   * Get a product from API by id
   * @param id
   * @returns a single product
   */
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  updateProduct(id: string, productUpdateDetail = {}): Observable<Object> {
    return this.http.patch(`${this.productsUrl}/${id}`, productUpdateDetail, {
      headers: this.loginServices.getHeaders(),
    });
  }

  updatePhotoUrl(product: Product) {
    product.photoUrl =
      environment.googleStorageURL + '/products/' + product.photo_key;
  }
}
