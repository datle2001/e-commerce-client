import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductServices } from "./products.service";
import { CartService } from "../cart/cart.service";
import { Product } from "../product/product";

@Component({
 templateUrl: './product-list.component.html',
 styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  private _nameFilter: string = ""
  private MAX_COLS_PER_ROW = 4
  private MAX_SCREEN_WIDTH = window.screen.availWidth;
  protected cols: number = this.MAX_COLS_PER_ROW

  products: Product[] = []
  filteredProducts: Product[] = []
  errorMessage: any;
  sub! : Subscription;

  constructor(private productsService: ProductServices, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
    this.filteredProducts = this.products;  
  }

  get nameFilter(): string {
    return this._nameFilter
  }

  set nameFilter(filter: string) {
    this._nameFilter = filter
    this.filteredProducts = this.products.filter((product: Product) => 
    product.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.cols = Math.round(innerWidth/this.MAX_SCREEN_WIDTH * this.MAX_COLS_PER_ROW)     
    
    }
}