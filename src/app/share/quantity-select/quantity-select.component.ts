import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'quant-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.css']
})
export class QuantitySelectComponent {
  @Input()
  quant!: number;
  @Output() onClick = new EventEmitter<number>()

  protected onIncrementClick() {
    this.onClick.emit(this.quant+1)
  }

  protected onDecrementClick() {
    if(this.quant > 1) {
      this.onClick.emit(this.quant-1)
    }
  }
}
