import { Component } from '@angular/core';
import { Product } from '../product/product';
import { CartService } from './cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    protected cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onRemoveClick(product: Product) {
    this.cartService.removeProduct(product);
  }

  onCheckOutClick() {
    this.cartService.createCheckout().subscribe({
      next: (res: any) => {
        this.toastr.success('Thank you for your purchase!', 'Success');
        this.cartService.removeAll();
        this.router.navigate(['/products']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  onRemoveAllClick() {
    this.cartService.removeAll();
  }
}
