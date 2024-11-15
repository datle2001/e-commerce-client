import { TestBed } from '@angular/core/testing';
import { SelectedProduct } from '../models/selected-product';
import { mockProduct, mockProduct2 } from '../shared/test/data';
import { CartService } from './cart.service';
import { LocalStorageService } from './local-storage.service';
import { ProductService } from './product.service';

describe('CartService', () => {
  let cartService: CartService;
  let selectedProduct: SelectedProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CartService,
        {
          provide: LocalStorageService,
          useValue: {
            getLocalSelectedProducts: () => [],
            saveSelectedProductsToLocal: () => {},
          },
        },
        { provide: ProductService, useValue: {} },
      ],
    });

    cartService = TestBed.inject(CartService);
    selectedProduct = {
      product: mockProduct,
      quantity: 2,
    };
  });

  it('should add a new selected product successfully', () => {
    cartService.addProduct(selectedProduct);
    expect(cartService.selectedProducts.at(-1)).toBe(selectedProduct);
  });

  it('should update the quantity of a selected product when the product is added again', () => {
    const selectedProduct2: SelectedProduct = {
      product: selectedProduct.product,
      quantity: 3,
    };
    const expectedQuantity =
      selectedProduct.quantity + selectedProduct2.quantity;

    cartService.addProduct(selectedProduct);
    cartService.addProduct(selectedProduct2);
    expect(cartService.selectedProducts.length).toEqual(1);
    expect(cartService.selectedProducts[0].quantity).toEqual(expectedQuantity);
  });

  it('should not crash when removing a nonexisting product', () => {
    expect(() => {
      cartService.removeProduct(mockProduct.id);
    }).not.toThrow();
  });

  it('should remove a selected product successfully', () => {
    cartService.addProduct(selectedProduct);
    cartService.removeProduct(selectedProduct.product.id);

    expect(cartService.selectedProducts).not.toContain(selectedProduct);
  });

  it('should remove all products successfully', () => {
    cartService.addProduct(selectedProduct);
    cartService.removeAllProducts();

    expect(cartService.selectedProducts.length).toEqual(0);
  });

  it('should count the number of products correctly', () => {
    const selectedProduct2: SelectedProduct = {
      product: mockProduct2,
      quantity: 4,
    };
    const expectedQuantity =
      selectedProduct2.quantity + selectedProduct.quantity;

    cartService.addProduct(selectedProduct);
    cartService.addProduct(selectedProduct2);

    expect(cartService.countProducts()).toEqual(expectedQuantity);
  });

  it('should get subtotal correctly', () => {
    const selectedProduct2: SelectedProduct = {
      product: mockProduct2,
      quantity: 5,
    };
    const expectedSubtotal =
      selectedProduct.quantity * selectedProduct.product.price +
      selectedProduct2.quantity * selectedProduct2.product.price;

    cartService.addProduct(selectedProduct);
    cartService.addProduct(selectedProduct2);

    expect(cartService.getSubtotal()).toEqual(expectedSubtotal);
  });
});
