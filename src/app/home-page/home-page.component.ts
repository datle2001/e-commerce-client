import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page-root',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  protected welcomePageImageLink = `${environment.googleStorageURL}/image-welcome-page/`;

  ngOnInit(): void {}
}
