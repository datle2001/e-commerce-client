import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { Observable, take } from 'rxjs';
import { ToastType } from '../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
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
      default:
        activeToast = this.toastr.warning(message, toastType);
        break;
    }

    return activeToast.onHidden.pipe(take(1));
  }
}
