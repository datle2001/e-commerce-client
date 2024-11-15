import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { mockProduct, mockProduct2 } from '../shared/test/data';
import { of } from 'rxjs/internal/observable/of';

describe('ProductService', () => {
  let productService: ProductService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'patch']);
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['getHeaders']);

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        {
          provide: HttpClient,
          useValue: httpClientSpy,
        },
        {
          provide: LoginService,
          useValue: loginServiceSpy,
        },
      ],
    });

    productService = TestBed.inject(ProductService);
  });

  it('should return the expected array of products', (done: DoneFn) => {
    let emitCount = 0;
    const mockProducts = [mockProduct, mockProduct2];
    httpClientSpy.get.and.returnValue(of(mockProducts));

    productService.getProducts({}).subscribe({
      next: (products) => {
        emitCount++;
        expect(products).toEqual(mockProducts);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).withContext('getProducts emits once').toEqual(1);
        done();
      },
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('get emits once')
      .toEqual(1);
  });

  it('should return the expected product', (done: DoneFn) => {
    let emitCount = 0;
    const expectedProduct = mockProduct;
    httpClientSpy.get.and.returnValue(of(expectedProduct));

    productService.getProductById(expectedProduct.id).subscribe({
      next: (product) => {
        emitCount++;
        expect(product).toEqual(expectedProduct);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).withContext('getProductById emits once').toEqual(1);
        done();
      },
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('HTTP get emits once')
      .toEqual(1);
  });
});
