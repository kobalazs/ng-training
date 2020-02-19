import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
    //
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.token) {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${this.authService.token}`,
          'Content-Type': 'application/json'
        }
      });
    }
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const message = errorResponse?.error?.error;
        if (['token_expired', 'token_invalid', 'token_not_provided'].indexOf(message) !== -1) {
          this.authService.logout();
        }
        window.alert(message ?? 'Unexpected system error.');
        return throwError(errorResponse);
      })
    );
  }
}
