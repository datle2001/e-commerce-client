import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelectComponent } from './quantity-select.component';

describe('QuantitySelectComponent', () => {
  let component: QuantitySelectComponent;
  let fixture: ComponentFixture<QuantitySelectComponent>;
  let leftButton: HTMLButtonElement;
  let rightButton: HTMLButtonElement;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    leftButton = nativeElement.querySelector('#left')!;
    rightButton = nativeElement.querySelector('#right')!;
    inputElement = nativeElement.querySelector('input')!;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render left button, right button, and input elemets', () => {
    expect(leftButton).toBeTruthy();
    expect(rightButton).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  it('should call onDecrementClick once when left button is clicked', () => {
    const quantitySelectComponentSpy = spyOn(component, 'onDecrementClick');
    
    leftButton.dispatchEvent(new Event('click'));
  });
});

