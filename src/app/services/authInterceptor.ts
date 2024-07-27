import {HttpInterceptorFn} from '@angular/common/http';
import {LoginService} from "./login.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authHeader = sessionStorage.getItem(LoginService.AUTH_HEADER);

  if (authHeader) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: authHeader
      }
    });

    return next(clonedRequest);
  }


  return next(req);
};
