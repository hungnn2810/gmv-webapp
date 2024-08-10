import { Injectable } from '@angular/core';
import { UserService } from './core/services/user.service';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Environment } from './environment.interface';
import { AuthService } from './core/services/auth.service';

declare let __config: Environment;

@Injectable()
export class AppInitService {
  private readonly authConfig: AuthConfig = {
    issuer: __config.IDP,
    redirectUri: window.location.origin + '/home',
    postLogoutRedirectUri: window.location.origin,
    clientId: __config.CLIENT_ID,
    scope: 'openid profile role-data user-data invoice-data offline_access',
    responseType: 'code',
    showDebugInformation: false,
    silentRefreshTimeout: 5000,
    requireHttps: false,
    skipIssuerCheck: true,
    oidc: true,
  };

  public static USER_PRIVILEGES: Array<string> = [];
  constructor(
    private userService: UserService,
    private oauthService: OAuthService,
    private authService: AuthService
  ) {}

  async Init(): Promise<void> {
    // this.oauthService.configure(this.authConfig);
    // localStorage.removeItem('entities');
    // try {
    //   const isAuthenticated = await this.authService
    //     .isAuthenticated()
    //     .toPromise();
    //   if (isAuthenticated) {
    //     const res = await this.userService.getInfo().toPromise();
    //     // AppInitService.USER_ID = res!.id;
    //     const dataSplited: RightResults = {
    //       entities: [],
    //       privileges: [],
    //     };
    //     res!.rights.forEach((right: any) => {
    //       const parts = right.split('/');
    //       for (let i = 0; i < parts.length; i += 2) {
    //         const entity = parts[i];
    //         const value = parts[i + 1];
    //         if (entity === 'entities') {
    //           if (!dataSplited.entities.includes(value))
    //             dataSplited.entities.push(value);
    //         } else if (entity === 'privileges') {
    //           dataSplited.privileges.push(value);
    //         }
    //       }
    //     });
    //     localStorage.setItem(
    //       'entities',
    //       dataSplited.entities.map((x: any) => x.replaceAll('_', '-'))
    //     );
    //     AppInitService.USER_PRIVILEGES = dataSplited.privileges;
    //   } else {
    //     this.oauthService.setupAutomaticSilentRefresh();
    //     await this.oauthService.loadDiscoveryDocumentAndLogin();
    //   }
    // } catch (error) {
    //   alert('Không tìm thấy thông tin người dùng\nVui lòng đăng nhập lại.');
    // }
  }
}

export interface RightResults {
  entities: any;
  privileges: any;
}
