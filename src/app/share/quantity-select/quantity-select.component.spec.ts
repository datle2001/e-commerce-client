import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelectComponent } from './quantity-select.component';

describe('QuantitySelectComponent', () => {
  let component: QuantitySelectComponent;
  let fixture: ComponentFixture<QuantitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
