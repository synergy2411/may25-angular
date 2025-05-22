import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Interceptor works!');
    console.log('REQUEST : ', req);

    // const clonedReq = req.clone({
    //   params: new HttpParams().set('X-Authentication', 'Bearer TOKEN'),
    // });

    // console.log('CLONED REQ : ', clonedReq);

    return next.handle(req).pipe(
      tap((value) => {
        // console.log('RESPONSE INTERCEPTOR');
        // console.log('RESPONSE : ', value);
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

// "https://sk-ng-may-25-default-rtdb.firebaseio.com/expenses.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2stbmctbWF5LTI1IiwiYXVkIjoic2stbmctbWF5LTI1IiwiYXV0aF90aW1lIjoxNzQ3OTAwMzgxLCJ1c2VyX2lkIjoiS0dvWFVFN21BYWM4TWYyaUQyYW1aWlh0dnlRMiIsInN1YiI6IktHb1hVRTdtQWFjOE1mMmlEMmFtWlpYdHZ5UTIiLCJpYXQiOjE3NDc5MDAzODEsImV4cCI6MTc0NzkwMzk4MSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.WBWuveFuQbkqt1tuMw7V9eKCs5k3FVYzvNmwhBKBhjw9668_cLSw4i7UOpLX42cKzhoboU7hv1QdRFmbhQYsQfc0WyZSkvBYRIMNyqCJ9IwYNs1L4nXY_vGZFsp1OuX8FVfJagJ97e5kCTlttBTctvEcMUBLIgotznt5auQtd8wtwVhCZWYcmseaUfnWDkvoGC3Ml15XIf2zhL4RUM1i4xsExgafXA98McW0FsXqFFCPdRJ3HD_CGWveQRK0qD2622E6JUqoJdO4npOIHNnWCsr_l_QflbHS2_D1_5sCmP_m4Svir-RPpLbzEOMldLN1L2C0Y_P2fGaLaezZVFm9aw"
