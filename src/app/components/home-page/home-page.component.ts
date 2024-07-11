import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, RouterLink]
})
export class HomePageComponent implements OnInit {
  constructor() {}

  protected welcomePageImageLink = `${environment.googleStorageURL}/image-welcome-page/`;

  ngOnInit(): void {}
}
