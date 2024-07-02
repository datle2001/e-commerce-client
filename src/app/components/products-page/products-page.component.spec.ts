import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QuantitySelectComponent } from '../shared/quantity-select/quantity-select.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatProgressSpinnerModule],
      declarations: [ProductsPageComponent, SpinnerComponent, QuantitySelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
