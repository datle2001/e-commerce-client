import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [MatButtonModule, RouterLink]
})
export class HomePageComponent {
  protected welcomePageImageLink = `${environment.googleStorageURL}/image-welcome-page/`;
}
