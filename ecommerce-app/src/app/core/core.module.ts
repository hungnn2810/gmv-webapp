import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  NzBreadCrumbItemComponent,
  NzBreadCrumbModule,
} from 'ng-zorro-antd/breadcrumb';
import {
  NzDropDownModule,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule, NzSubMenuComponent } from 'ng-zorro-antd/menu';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { AppRoutingModule } from '../app-routing.module';
import { TokenInterceptor } from './interceptors/token-interceptor.service';
import { ErrorHandlerInterceptor } from './interceptors/error-handler-interceptor.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../icons-provider.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HomeLayoutComponent } from './components/layouts/home-layout/home-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CacheInterceptor } from './interceptors/cache-interceptor.service';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HeaderComponent } from './components/layouts/header/header.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { AnchorComponent } from './components/anchor/anchor.component';
@NgModule({
  declarations: [
    HomeLayoutComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    AnchorComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    TranslateModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // NG-ZORRO Modules
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzSubMenuComponent,
    NzIconModule,
    NzSpinComponent,
    NzSpinModule,
    NzBreadCrumbItemComponent,
    NzDropdownMenuComponent,
    NzDrawerModule,
    NzButtonModule,
    NzBackTopModule,
    NzFlexModule,
    NzCollapseModule,
    NzToolTipModule,
    NzTabsModule,
    NzDropDownModule,
    NzDividerModule,
    NzAffixModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    NzAnchorModule,
  ],
})
export class CoreModule {}
