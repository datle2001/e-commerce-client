import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { QuantitySelectComponent } from '../share/quantity-select/quantity-select.component';
import { ToastServices } from '../services/toast.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../share/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, MatProgressSpinnerModule],
      declarations: [SpinnerComponent, QuantitySelectComponent, CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
