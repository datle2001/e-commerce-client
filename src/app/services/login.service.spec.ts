import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import {
  mockLoginInfo,
  mockToken,
  mockToken2,
  mockUser,
} from '../shared/test/data';
import { LocalStorageService } from './local-storage.service';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment.development';
import { LoginState } from '../shared/enums';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', [
      'getToken',
      'setToken',
      'deleteToken',
    ]);
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    });

    loginService = TestBed.inject(LoginService);
  });

  it('should return the expected token after successful signup', (done: DoneFn) => {
    const expectedToken = mockToken;
    let emitCount = 0;
    httpClientSpy.post.and.returnValue(of(expectedToken));

    loginService.signup(mockUser).subscribe({
      next: (token) => {
        emitCount++;
        expect(token).toEqual(expectedToken);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).toEqual(1);
        done();
      },
    });

    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });

  it('should return the expected token after sucessful login', (done: DoneFn) => {
    const expectedToken = mockToken;
    let emitCount = 0;
    httpClientSpy.post.and.returnValue(of(expectedToken));

    loginService.login(mockLoginInfo).subscribe({
      next: (token) => {
        emitCount++;
        expect(token).toEqual(expectedToken);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).toEqual(1);
        done();
      },
    });

    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });

  it('should return the expected token after sucessful login with token', (done: DoneFn) => {
    const expectedToken = mockToken2;
    let emitCount = 0;
    spyOn(loginService, 'getHeaders').and.returnValue(new HttpHeaders());
    httpClientSpy.post.and.returnValue(of(expectedToken));

    loginService.loginWithToken().subscribe({
      next: (token) => {
        emitCount++;
        expect(token).toEqual(expectedToken);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).toEqual(1);
        done();
      },
    });

    expect(loginService.getHeaders).toHaveBeenCalledTimes(1);
    expect(httpClientSpy.post).toHaveBeenCalledOnceWith(
      `${environment.api.url}/loginWithToken`,
      {},
      { headers: loginService.getHeaders() }
    );
  });

  it('should return the expected header', () => {
    localStorageServiceSpy.getToken.and.returnValue(mockToken);

    const expectedToken = loginService.getHeaders();

    expect(expectedToken.get('Authorization')).toEqual(mockToken.token);
    expect(expectedToken.get('Content-type')).toEqual('application/json');
    expect(localStorageServiceSpy.getToken).toHaveBeenCalledTimes(1);
  });

  it('should login user successfully', () => {
    localStorageServiceSpy.setToken.and.callFake(() => {});

    loginService.loginUser(mockToken);

    expect(loginService.loginState).toEqual(LoginState.LOGGED_IN);
    expect(localStorageServiceSpy.setToken).toHaveBeenCalledOnceWith(mockToken);
  });

  it('should logout user successfully', () => {
    localStorageServiceSpy.deleteToken.and.callFake(() => {});

    loginService.logoutUser();

    expect(loginService.loginState).toEqual(LoginState.NOT_LOGGED_IN);
    expect(localStorageServiceSpy.deleteToken).toHaveBeenCalledTimes(1);
  });
});
