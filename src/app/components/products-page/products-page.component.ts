import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from './product-box/product-box.component';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  standalone: true,
  imports: [SpinnerComponent, FormsModule, MatGridListModule, ProductBoxComponent, NgIf, NgFor, MatFormFieldModule]
})
export class ProductsPageComponent implements OnInit {
  constructor(private productServices: ProductServices) {}

  private _nameFilter: string = '';
  protected products: Product[] = this.productServices.products;
  protected filteredProducts: Product[] = this.products;
  protected cols: number | undefined ;

  ngOnInit(): void {
    this.onResize();
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
    this.cols = Math.floor(innerWidth * 0.9 / 270);
  }
}
