import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USER_URL: string = `${environment.api.url}/user`;

  constructor(private http: HttpClient, private loginServices: LoginService) {}

  getUser(): Observable<User> {
    return this.http
      .get<User>(this.USER_URL, {
        headers: this.loginServices.getHeaders(),
      })
      .pipe(take(1));
  }
}
