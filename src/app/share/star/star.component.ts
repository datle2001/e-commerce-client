import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 @Input()
 rating!: number
 @Input()
 isReadOnly: boolean = true

 @Output()
 onRatingChange: EventEmitter<number> = new EventEmitter<number>();

 protected onRatingClick(newRating: number) {
  this.onRatingChange.emit(newRating);
 }
}