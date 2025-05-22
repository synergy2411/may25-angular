import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      params: new HttpParams().set('auth', this.authService.getToken()),
    });

    return next.handle(clonedReq);
  }
}

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const authService = Inject(AuthService);

//   console.log('Intercept : ', authService.getToken());
//   const clonedReq = req.clone({
//     params: new HttpParams().set('auth', authService.getToken()),
//   });

//   return next(clonedReq);
// };
