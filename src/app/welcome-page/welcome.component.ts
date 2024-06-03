import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'welcomes-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  protected welcomePageImageLink = `${environment.googleStorageURL}/image-welcome-page/`;

  ngOnInit(): void {}
}
