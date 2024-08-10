import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  NZ_CONFIG,
  NzConfig,
  provideNzConfig,
} from 'ng-zorro-antd/core/config';
import { NZ_DATE_LOCALE, NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppInitService } from './app-init.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';
import { FeatureModule } from './features/feature.module';
import { vi } from 'date-fns/locale';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

registerLocaleData(en);

const nzConfig: NzConfig = {
  notification: { nzDuration: 2000 },
  theme: {
    primaryColor: '#ce3168',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FeatureModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    NgProgressModule.withConfig({
      color: '#29d',
      spinner: true,
      spinnerPosition: 'right',
      thick: true,
      fixed: true,
      meteor: true,
    }),
    NgProgressHttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
      },
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_DATE_LOCALE, useValue: vi },
    { provide: NZ_CONFIG, useValue: nzConfig },
    DatePipe,
    provideNzConfig(nzConfig),
    AuthGuard,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}
