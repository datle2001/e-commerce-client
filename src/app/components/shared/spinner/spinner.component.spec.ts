import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from 'src/app/services/spinner.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { By } from '@angular/platform-browser';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let showSubject: BehaviorSubject<boolean>;

  beforeEach(async () => {
    showSubject = new BehaviorSubject<boolean>(false);
    const spinnerServiceMock = {
      show$: showSubject.asObservable()
    }
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent],
      providers: [{provide: SpinnerService, useValue: spinnerServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide spinner when spinnerService emits false', fakeAsync(() => {
    showSubject.next(false);
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('#spinner'));
    expect(spinner).toBeNull();
  }));

  it('should display spinner when spinnerService emits true', fakeAsync( () => {
    showSubject.next(true);
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('#spinner'));
    expect(spinner).toBeTruthy();
  }));
});
