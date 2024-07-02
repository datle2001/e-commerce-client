import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product.service';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  constructor(private productServices: ProductServices) {}

  private _nameFilter: string = '';
  protected products: Product[] = this.productServices.products;
  protected filteredProducts: Product[] = this.products;
  private MAX_COLS_PER_ROW = 4;
  private MAX_SCREEN_WIDTH = window.screen.availWidth;
  protected cols: number = this.MAX_COLS_PER_ROW;

  ngOnInit(): void {
    this.productServices.getProducts();
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  set nameFilter(filter: string) {
    this._nameFilter = filter;
    this.filteredProducts = this.products.filter(
      (product: Product) =>
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
