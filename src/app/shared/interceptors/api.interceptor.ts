import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return next.handle(request);
  }
}
