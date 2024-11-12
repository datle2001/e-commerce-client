import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule, NgIf, AsyncPipe],
})
export class SpinnerComponent {
  protected show$ = this.spinnerService.show$;

  constructor(protected spinnerService: SpinnerService) {}
}
