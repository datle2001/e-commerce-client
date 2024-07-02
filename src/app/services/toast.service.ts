import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastType } from '../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class ToastServices {
  constructor(private toastr: ToastrService) {}

  /**
   * Show popup with *message*
   * @param message
   */
  showToast(
    message: string,
    toastType: ToastType,
    timeout: number | undefined = 2000,
    easeTime: number | undefined = 500
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
