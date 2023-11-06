import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { globals } from 'src/globals';

@Injectable({
  providedIn: 'root',
})
export class ToastServices {
  constructor(private toastr: ToastrService) {}

  /**
   * Show success popup with *message*
   * @param message
   */
  showSuccessToast(
    message: string,
    timeout: number = globals.toastTimeout,
    easeTime: number = globals.toastEasingTime
  ): void {
    this.toastr.success(message, globals.toastSuccessTitle, {
      timeOut: timeout,
      easeTime: easeTime,
    });
  }
}
