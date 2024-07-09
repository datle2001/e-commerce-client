import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: []
})
export class HomePageComponent implements OnInit {
  constructor() {}

  protected welcomePageImageLink = `${environment.googleStorageURL}/image-welcome-page/`;

  ngOnInit(): void {
    console.log(true);
    
  }
}
