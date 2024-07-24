import { NgIf } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
  imports: [MatProgressSpinnerModule, NgIf],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  private destroyed = new Subject<void>();
  protected show: boolean | undefined;

  constructor(protected spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.show$.pipe(takeUntil(this.destroyed)).subscribe({
      next: (show) => {
        this.show = show;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
