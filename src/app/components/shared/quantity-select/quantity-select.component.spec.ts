import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantitySelectComponent } from './quantity-select.component';

describe('QuantitySelectComponent', () => {
  let component: QuantitySelectComponent;
  let fixture: ComponentFixture<QuantitySelectComponent>;
  let leftButton: HTMLButtonElement;
  let rightButton: HTMLButtonElement;
  let inputElement: HTMLInputElement;
  let expectedQuant: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuantitySelectComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(QuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    leftButton = nativeElement.querySelector('#left')!;
    rightButton = nativeElement.querySelector('#right')!;
    inputElement = nativeElement.querySelector('input')!;

    expectedQuant = 2;
    fixture.componentRef.setInput('quant', expectedQuant);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render left button, right button, and input elemets', () => {
    expect(leftButton).toBeTruthy();
    expect(rightButton).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  it('should render input element readonly', () => {
    expect(inputElement.readOnly).toBeTrue();
  });

  it('should set quant equal to expectedQuant', () => {
    expect(component.quant).toEqual(expectedQuant);
  });

  it('should decrement quant when left button is clicked', () => {
    let oldQuant = component.quant;
    let newQuant: number | undefined;
    component.onClick.subscribe((quant) => newQuant = quant);
    leftButton.click();
    expect(newQuant).toBeDefined();
    expect(newQuant).toEqual(oldQuant - 1);
  });

  it('should increment quant when right button is clicked', () => {
    let oldQuant = component.quant;
    let newQuant: number | undefined;
    component.onClick.subscribe((quant) => (newQuant = quant));
    rightButton.click();
    expect(newQuant).toBeDefined();
    expect(newQuant).toEqual(oldQuant + 1);
  });
});

