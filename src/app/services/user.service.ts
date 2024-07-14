import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginServices } from "./login.service";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private USER_URL: string = `${environment.api.url}/user`;
  

  constructor(private http: HttpClient, private loginServices: LoginServices) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.USER_URL, {
      headers: this.loginServices.getHeaders(),
    });
  }
}