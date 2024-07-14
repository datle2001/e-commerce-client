import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginInfo } from '../models/loginInfo';
import { LoginState } from '../shared/enums';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  constructor(private http: HttpClient) {}
  public loginInfo: LoginInfo = new LoginInfo('', '');
  private bearerToken: string = '';
  private TOKEN_KEY: string = 'token';

  private readonly _loginState = new BehaviorSubject<LoginState>(
    LoginState.NOT_LOGGED_IN
  );
  readonly loginState$ = this._loginState.asObservable();

  public login(): Observable<any> {
    const loginUrl = `${environment.api.url}/login`;
    return this.http.post(loginUrl, this.loginInfo);
  }

  public loginWithToken(): Observable<any> {
    const loginWithTokenUrl = `${environment.api.url}/loginWithToken`;
    return this.http.post(
      loginWithTokenUrl,
      {},
      {
        headers: this.getHeaders(),
      }
    );
  }

  public logout(): Observable<any> {
    const logoutUrl = `${environment.api.url}/logout`;

    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.getHeaders(),
      }
    );
  }

  public hasToken(): boolean {
    return (
      this.bearerToken != '' || localStorage.getItem(this.TOKEN_KEY) != null
    );
  }

  public setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public deleteToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public getHeaders(): any {
    if (this.bearerToken == '') {
      this.bearerToken = localStorage.getItem('token')!;
    }

    return {
      'Content-type': 'application/json',
      Authorization: this.bearerToken,
    };
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
}
