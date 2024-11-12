import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartProductComponent } from './cart-product.component';
import { QuantitySelectComponent } from '../../shared/quantity-select/quantity-select.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        QuantitySelectComponent,
        CartProductComponent,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
