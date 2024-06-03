import { Component, OnInit } from '@angular/core';
import { CartServices } from '../services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  constructor(protected cartService: CartServices) {}

  protected headerImageLink = `${environment.googleStorageURL}/image-header/`;

  ngOnInit(): void {}
}
