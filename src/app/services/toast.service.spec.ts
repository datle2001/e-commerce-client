import { TestBed } from '@angular/core/testing';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ToastType } from '../shared/enums';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    const toastrSpy = jasmine.createSpyObj('ToastrService', [
      'success',
      'error',
      'warning',
    ]);

    TestBed.configureTestingModule({
      providers: [ToastService, { provide: ToastrService, useValue: toastrSpy }],
    });

    service = TestBed.inject(ToastService);
    toastrServiceSpy = TestBed.inject(
      ToastrService
    ) as jasmine.SpyObj<ToastrService>;

    // Mock return values for toastr methods
    const mockActiveToast: Partial<ActiveToast<any>> = { onHidden: of(void 0) };
    toastrServiceSpy.success.and.returnValue(
      mockActiveToast as ActiveToast<any>
    );
    toastrServiceSpy.error.and.returnValue(mockActiveToast as ActiveToast<any>);
    toastrServiceSpy.warning.and.returnValue(
      mockActiveToast as ActiveToast<any>
    );
  });

  it('should show a success toast when toastType is SUCCESS', (done: DoneFn) => {
    service
      .showToast('Success message', ToastType.SUCCESS)
      .pipe(take(1))
      .subscribe(() => {
        expect(toastrServiceSpy.success).toHaveBeenCalledWith(
          'Success message',
          ToastType.SUCCESS
        );
        done();
      });
  });

  it('should show an error toast when toastType is ERROR', (done: DoneFn) => {
    service
      .showToast('Error message', ToastType.ERROR)
      .pipe(take(1))
      .subscribe(() => {
        expect(toastrServiceSpy.error).toHaveBeenCalledWith(
          'Error message',
          ToastType.ERROR
        );
        done();
      });
  });

  it('should show a warning toast when toastType is neither SUCCESS nor ERROR', (done: DoneFn) => {
    service
      .showToast('Warning message', ToastType.WARNING)
      .pipe(take(1))
      .subscribe(() => {
        expect(toastrServiceSpy.warning).toHaveBeenCalledWith(
          'Warning message',
          ToastType.WARNING
        );
        done();
      });
  });
});
