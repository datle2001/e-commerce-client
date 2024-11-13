import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationPageComponent } from './confirmation-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmationPageComponent', () => {
  let component: ConfirmationPageComponent;
  let fixture: ComponentFixture<ConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        MatProgressSpinnerModule,
        SpinnerComponent,
        ConfirmationPageComponent,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
