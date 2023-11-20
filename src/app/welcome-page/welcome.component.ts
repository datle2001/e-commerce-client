import { Component, OnInit } from '@angular/core';
import { S3Services } from '../services/s3.service';

@Component({
  selector: 'welcomes-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private s3: S3Services) {}

  imageLinks: { [imageName: string]: string } | undefined;
  link: string | undefined;

  ngOnInit(): void {
    this.getImageLinks();
  }

  getImageLinks() {
    let imageNames = ['farm', 'farm_1', 'farm_2', 'farm_5'];
    let imageLinks: { [imageName: string]: string } = {};

    imageNames.forEach((imageName) => {
      imageLinks[imageName] = this.s3.getProductPhotoUrl(
        `misc/${imageName}.jpg`
      );
    });

    this.imageLinks = imageLinks;
  }
}
