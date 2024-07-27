import {CanActivateFn} from '@angular/router';
import {LoginService} from "../services/login.service";
import {inject} from "@angular/core";

export const sessionGuard: CanActivateFn = (route, state) => {
  if (!sessionStorage.getItem(LoginService.USER_INFO)) {
    const loginService = inject(LoginService);
    loginService.logout();
    return false;
  }
  return true;
};
