import { TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';
import { take } from 'rxjs/operators';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpinnerService],
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should have initial show state as false', () => {
    expect(service.show).toBeFalse();
  });

  it('should set show state to true', () => {
    service.show = true;
    expect(service.show).toBeTrue();
  });

  it('should emit new show value when changed', (done) => {
    let emitCount = 0;
    service.show$ // subscribe to observable and take the first emitted value
      .pipe(take(2))
      .subscribe((value) => {
        if(emitCount == 0) {
          emitCount++;
        } else {
          expect(value).toBeTrue();
          done();
        }
      });

    service.show = true; // trigger observable emission by setting show
  });

  it('should set show state to false', () => {
    service.show = false;
    expect(service.show).toBeFalse();
  });
});
