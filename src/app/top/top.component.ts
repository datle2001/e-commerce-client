import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  shopLogoUrl = '../assets/shopLogo.jpg';
  accountLogoUrl = '../assets/accountLogo.png';
  cartLogoUrl = '../assets/cartLogo.png';

  constructor(protected cartService: CartService) {}
}
