import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor works!');
    console.log('REQUEST : ', req);

    const clonedReq = req.clone({
      params: new HttpParams().set('X-Authentication', 'Bearer TOKEN'),
    });

    console.log('CLONED REQ : ', clonedReq);

    return next.handle(clonedReq).pipe(
      tap((value) => {
        console.log('RESPONSE INTERCEPTOR');
        console.log('RESPONSE : ', value);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error) {
          console.log(error.status, error.message);
        }
        throw error;
      })
    );
  }
}

// export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log('Interceptor works!');
//   console.log('REQUEST : ', req);
//   return next(req);
// };

// "http://localhost:3000/expenses?X-Authentication=Bearer%20TOKEN"
