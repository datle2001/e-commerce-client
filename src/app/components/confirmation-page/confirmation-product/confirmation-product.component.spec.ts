import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationProductComponent } from './confirmation-product.component';

describe('ConfirmationProductComponent', () => {
  let component: ConfirmationProductComponent;
  let fixture: ComponentFixture<ConfirmationProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfirmationProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
