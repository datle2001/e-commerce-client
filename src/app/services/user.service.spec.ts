import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { mockUser } from '../shared/test/data';
import { LoginService } from './login.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    loginServiceSpy = jasmine.createSpyObj('LoginServices', ['getHeaders']);

    TestBed.configureTestingModule({
      providers: [
        UserService,
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

    userService = TestBed.inject(UserService);
  });

  it('should return the expected user', (done: DoneFn) => {
    const expectedUser = mockUser;
    let emitCount = 0;
    httpClientSpy.get.and.returnValue(of(expectedUser));
    loginServiceSpy.getHeaders.and.returnValue(new HttpHeaders());

    userService.getUser().subscribe({
      next: (user) => {
        emitCount++;
        expect(user).toEqual(expectedUser);
      },
      error: done.fail,
      complete: () => {
        expect(emitCount).withContext('getUser emits only once').toEqual(1);
        done();
      },
    });

    expect(httpClientSpy.get.calls.count())
      .withContext('HttpClient called only once')
      .toEqual(1);
    expect(loginServiceSpy.getHeaders.calls.count())
      .withContext('LoginService called only once')
      .toEqual(1);
  });
});
