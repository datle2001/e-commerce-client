import { Component, OnInit } from '@angular/core';
import { CartServices } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cartServices: CartServices) {}

  title = 'e-commerce';

  ngOnInit(): void {
    this.cartServices.getSelectedProductsFromLocal();
  }
}
