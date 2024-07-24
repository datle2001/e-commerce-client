import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { ToastType } from '../shared/enums';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastServices {
  constructor(private toastr: ToastrService) {}

  /**
   * Show popup with *message*
   * @param message
   */
  showToast(message: string, toastType: ToastType): Observable<any> {
    let activeToast: ActiveToast<any>;

    switch (toastType) {
      case ToastType.SUCCESS:
        activeToast = this.toastr.success(message, toastType);
        break;
      case ToastType.ERROR:
        activeToast = this.toastr.error(message, toastType);
        break;
      case ToastType.WARNING:
        activeToast = this.toastr.warning(message, toastType);
        break;
    }

    return activeToast.onHidden.pipe(take(1));
  }
}
