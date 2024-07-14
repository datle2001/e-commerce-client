import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ProductServices } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatGridListModule,
    MatInputModule,
    ProductBoxComponent,
    SpinnerComponent,
    FormsModule,
    MatPaginatorModule,
  ],
})
export class ProductsPageComponent {
  constructor(protected productServices: ProductServices) {
    this.onResize();
    this.productServices.products$.subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }

  private _nameFilter: string = '';
  protected products: Product[] = [];
  protected cols: number | undefined;

  get nameFilter(): string {
    return this._nameFilter;
  }

  set nameFilter(filter: string) {
    this._nameFilter = filter;
    this.products = this.productServices.products.filter(
      (product: Product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.cols = Math.floor((innerWidth * 0.9) / 270);
  }

  onPageChange($event: PageEvent) {
    this.productServices.pageIndex = $event.pageIndex;
  }
}
