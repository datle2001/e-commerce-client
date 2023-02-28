import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 @Input()
 rating!: number
}
