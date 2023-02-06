import { Component, OnInit, OnDestroy, Host } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductServices } from "./products.service";
import { ProductBoxComponent } from "./productBox/product-box.component";
import { CartService } from "../cart/cart.service";
import { Product } from "../product/product";
import { HttpClientModule } from "@angular/common/http";

@Component({
 templateUrl: './product-list.component.html',
 styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
 private _nameFilter: string = ""
 products: Product[] = [];

 filteredProducts: Product[] = [];
 errorMessage: any;
 sub! : Subscription;

 constructor(private productsService: ProductServices, private cartService: CartService) {}
 ngOnDestroy(): void {
  //this.sub.unsubscribe()
 }

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
   product.name.includes(filter)
  )
 }
}