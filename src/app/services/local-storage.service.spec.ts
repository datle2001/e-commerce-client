import { TestBed } from '@angular/core/testing';
import { SelectedProduct } from '../models/selected-product';
import { mockProduct, mockProduct2, mockToken, mockToken2 } from '../shared/test/data';
import { LocalStorageService, StorageProduct } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should save selected products to local storage in the correct format', () => {
    const selectedProducts: SelectedProduct[] = [
      { product: mockProduct, quantity: 1 },
      { product: mockProduct2, quantity: 2 },
    ];
    const expectedStorageProducts = [
      { id: mockProduct.id, quantity: 1 },
      { id: mockProduct2.id, quantity: 2 },
    ];
    spyOn(localStorage, 'setItem');

    localStorageService.saveSelectedProductsToLocal(selectedProducts);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      localStorageService.SELECTED_PRODUCTS_KEY,
      JSON.stringify(expectedStorageProducts)
    );
  });

  it('should return storage products', () => {
    const expectedStorageProducts: StorageProduct[] = [
      { id: mockProduct.id, quantity: 1 },
      { id: mockProduct2.id, quantity: 2 },
    ];

    spyOn(localStorage, 'getItem').and.returnValue(
      JSON.stringify(expectedStorageProducts)
    );

    const storageProducts = localStorageService.getLocalSelectedProducts();

    expect(storageProducts).toEqual(expectedStorageProducts);
    expect(localStorage.getItem).toHaveBeenCalledOnceWith(
      localStorageService.SELECTED_PRODUCTS_KEY
    );
  });

  it('should return null when there is no storage product', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const storageProducts = localStorageService.getLocalSelectedProducts();

    expect(storageProducts).toEqual(null);
    expect(localStorage.getItem).toHaveBeenCalledOnceWith(
      localStorageService.SELECTED_PRODUCTS_KEY
    );
  });

  it('should return true when there is a valid token', () => {
    spyOn(localStorageService, 'getToken').and.returnValue(mockToken);
    spyOn(localStorageService, 'deleteToken');

    const hasValidToken = localStorageService.hasValidToken();

    expect(hasValidToken).toBeTrue();
    expect(localStorageService.getToken).toHaveBeenCalledTimes(1);
    expect(localStorageService.deleteToken).not.toHaveBeenCalled();
  });

  it('should return false when there is no token', () => {
    spyOn(localStorageService, 'getToken').and.returnValue(null);
    spyOn(localStorageService, 'deleteToken');

    const hasValidToken = localStorageService.hasValidToken();

    expect(hasValidToken).toBeFalse();
    expect(localStorageService.getToken).toHaveBeenCalledTimes(1);
    expect(localStorageService.deleteToken).toHaveBeenCalledTimes(1);
  });

  it('should return false when there is an expired token', () => {
    spyOn(localStorageService, 'getToken').and.returnValue(mockToken2);
    spyOn(localStorageService, 'deleteToken');

    const hasValidToken = localStorageService.hasValidToken();

    expect(hasValidToken).toBeFalse();
    expect(localStorageService.getToken).toHaveBeenCalledTimes(1);
    expect(localStorageService.deleteToken).toHaveBeenCalledTimes(1);
  });
});
