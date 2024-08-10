import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string = '';

  constructor(
    private cacheService: HttpCacheService,
    private authService: AuthService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this.authService.getAccessToken();

    return next.handle(this.addToken(req, this.token)).pipe(
      catchError((err) => {
        if ([401].includes(err.status) && this.token) {
          this.token = this.authService.refreshToken();
        }
        return throwError(err);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    let endpoint = request.url.split('/')[3];

    if (
      request.method.toUpperCase() == 'DELETE' ||
      request.method.toUpperCase() == 'PUT'
    ) {
      this.cacheService.invalidateEndpoint(endpoint!);
    } else if (
      request.method.toUpperCase() == 'POST' &&
      request.url.split('/').length == 4
    ) {
      this.cacheService.invalidateEndpoint(endpoint!);
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
