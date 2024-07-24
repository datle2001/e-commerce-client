import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { ProductServices } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

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
    AsyncPipe
  ],
})
export class ProductsPageComponent implements OnDestroy, OnInit {
  private destroyed = new Subject<void>();
  private _nameFilter: string = '';
  protected cols: number | undefined;
  private _pageIndex: number = 0;
  pageSize = 15;
  protected products: Product[] | undefined;

  constructor(
    protected productServices: ProductServices,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.onResize();
    this.getProducts();
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  set nameFilter(filter: string) {
    this._nameFilter = filter;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  set pageIndex(pageIndex: number) {
    this._pageIndex = pageIndex;
    this.getProducts();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.cols = Math.floor((innerWidth * 0.9) / 270);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  getProducts() {
    this.spinnerService.show = true;
    this.productServices
      .getProducts({
        pageSize: this.pageSize,
        pageIndex: this.pageIndex + 1,
      })
      .subscribe({
        next: (products) => {
          console.log(products);
          
          this.products = products;
          this.spinnerService.show = false;
        },
    });
  }
}
