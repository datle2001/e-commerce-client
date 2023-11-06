import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from '../model/product/product';
import { ProductServices } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productServices: ProductServices) {}

  private _nameFilter: string = '';
  private MAX_COLS_PER_ROW = 4;
  private MAX_SCREEN_WIDTH = window.screen.availWidth;
  protected cols: number = this.MAX_COLS_PER_ROW;
  protected products: Product[] = [];
  protected filteredProducts: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Call to ProductServices to get all products
   */
  protected getProducts(): void {
    this.productServices.getProducts().subscribe({
      next: (rawProducts) => {
        rawProducts.forEach((rawProduct: any) => {
          let product = this.productServices.initProductFrom(rawProduct);

          // add the instance to the Product array
          this.products.push(product);
        });

        this.filteredProducts = this.products;
      },
      error: (err) => {
        console.log(err, err.data);
      },
    });
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  set nameFilter(filter: string) {
    this._nameFilter = filter;
    this.filteredProducts = this.products.filter((product: Product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.cols = Math.round(
      (innerWidth / this.MAX_SCREEN_WIDTH) * this.MAX_COLS_PER_ROW
    );
  }
}
