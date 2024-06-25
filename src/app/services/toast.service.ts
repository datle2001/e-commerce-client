import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { globals } from 'src/globals';
import { ToastType } from '../share/enums';

@Injectable({
  providedIn: 'root',
})
export class ToastServices {
  constructor(private toastr: ToastrService) {}

  /**
   * Show success popup with *message*
   * @param message
   */
  showToast(
    message: string,
    toastType: ToastType,
    timeout: number | undefined = globals.toastTimeout,
    easeTime: number | undefined = globals.toastEasingTime
  ): void {
    switch (toastType) {
      case ToastType.SUCCESS:
        this.toastr.success(message, toastType, {
          timeOut: timeout,
          easeTime: easeTime,
        });
        break;
      case ToastType.ERROR:
        this.toastr.error(message, toastType, {
          timeOut: timeout,
          easeTime: easeTime,
        });
        break;
      case ToastType.WARNING:
        this.toastr.warning(message, toastType, {
          timeOut: timeout,
          easeTime: easeTime,
        });
        break;
    }
  }
}
