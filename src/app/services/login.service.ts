import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { LoginInfo } from '../models/login-info';
import { Token } from '../models/token';
import { User } from '../models/user';
import { LoginState } from '../shared/enums';
import { LocalStorageService } from './local-storage.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  private readonly _loginState = new BehaviorSubject<LoginState>(
    LoginState.NOT_LOGGED_IN
  );

  public signup(signupInfo: User): Observable<Token> {
    const signupUrl = `${environment.api.url}/signup`;

    return this.http.post<Token>(signupUrl, signupInfo).pipe(take(1));
  }

  public login(loginInfo: LoginInfo): Observable<Token> {
    const loginUrl = `${environment.api.url}/login`;

    return this.http.post<Token>(loginUrl, loginInfo).pipe(take(1));
  }

  public loginWithToken(): Observable<Token> {
    const loginWithTokenUrl = `${environment.api.url}/loginWithToken`;

    return this.http
      .post<Token>(loginWithTokenUrl, {}, { headers: this.getHeaders() })
      .pipe(take(1));
  }

  public logout(): Observable<any> {
    const logoutUrl = `${environment.api.url}/logout`;

    return this.http
      .post(logoutUrl, {}, { headers: this.getHeaders() })
      .pipe(take(1));
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: this.localStorageService.getToken()!.token,
    });
  }

  set loginState(loginState: LoginState) {
    this._loginState.next(loginState);
  }

  get loginState(): LoginState {
    return this._loginState.getValue();
  }

  public hasLoggedIn(): boolean {
    return this.loginState == LoginState.LOGGED_IN;
  }

  public isLoggingIn(): boolean {
    return this.loginState == LoginState.LOGGING_IN;
  }

  public loginUser(token: Token) {
    this.loginState = LoginState.LOGGED_IN;
    this.localStorageService.setToken(token);
  }

  // Clean up after successful logout
  public logoutUser() {
    this.loginState = LoginState.NOT_LOGGED_IN;
    this.localStorageService.deleteToken();
  }
}
