import { Component, OnInit } from '@angular/core';
import { CartServices } from '../services/cart.service';
import { S3Services } from '../services/s3.service';

@Component({
  selector: 'top-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  constructor(protected cartService: CartServices, private s3: S3Services) {}

  imageLinks: { [imageName: string]: string } = {
    shop_logo: '',
    account_logo: '',
  };

  ngOnInit(): void {
    this.getImageLinks();
  }

  getImageLinks() {
    Object.keys(this.imageLinks).forEach((imageName) => {
      this.imageLinks[imageName] = this.s3.getProductPhotoUrl(
        `misc/${imageName}.jpg`
      );
    });
  }
}
