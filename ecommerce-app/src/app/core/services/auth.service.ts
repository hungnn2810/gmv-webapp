import { Injectable } from '@angular/core';
import { OAuthService, UserInfo } from 'angular-oauth2-oidc';
import { Observable, catchError, from, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {}

  isAuthenticated(): Observable<boolean> {
    return from(this.oauthService.loadDiscoveryDocumentAndTryLogin()).pipe(
      switchMap(() => {
        if (this.oauthService.hasValidAccessToken()) {
          return from(this.oauthService.loadUserProfile()).pipe(
            map(() => true),
            catchError(() => of(false))
          );
        } else {
          return of(false);
        }
      }),
      catchError(() => of(false))
    );
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

  async getUserInfo(): Promise<UserInformation> {
    var userInformation = new UserInformation();
    await this.oauthService.loadUserProfile().then((res: any) => {
      userInformation = Object.assign(res.info);
    });
    return userInformation;
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refreshToken(): string {
    this.oauthService.silentRefresh().then((res) => {
      return this.oauthService.getAccessToken();
    });

    return '';
  }
}

export class UserInformation {
  sub: string = '';
  constructor() {}
}
