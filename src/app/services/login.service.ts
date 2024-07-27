import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Observable, tap} from "rxjs";
import {LoggedUserInfo, Login} from "../model/login";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static USER_INFO = 'userInfo';
  static AUTH_HEADER = 'authHeader';

  constructor(private httpClient: HttpClient, private configuration: ConfigurationService, private router: Router) {
  }

  login(loginData: Login): Observable<LoggedUserInfo> {
    return this.httpClient.post<LoggedUserInfo>(`${this.configuration.serverURL()}/auth/login`, loginData).pipe(
      tap(info => {

        sessionStorage.setItem(LoginService.AUTH_HEADER, `Basic ${btoa(loginData.username + ":" + loginData.password)}`);
        sessionStorage.setItem(LoginService.USER_INFO, JSON.stringify(info));
      })
    );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
