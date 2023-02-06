import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductBoxComponent } from "../productList/productBox/product-box.component";
import { ProductServices } from "../productList/products.service";

@Component({
 selector: 'pd-root',
 templateUrl: './product-detail-page.component.html'
})
export class ProductDetailPageComponent implements OnInit {
 product: ProductBoxComponent | undefined;
 ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  
 }

 constructor(private route: ActivatedRoute, private productServices: ProductServices) {}
 

 
}