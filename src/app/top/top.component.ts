import { Component } from '@angular/core';
import { CartServices } from '../services/cart.service';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  constructor(protected cartService: CartServices) {}
}
