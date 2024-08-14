import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@ant-design/icons-angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import {
  NzDropDownModule,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputGroupComponent, NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule, NzSubMenuComponent } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from '../app-routing.module';
import { ElementActivateDirective } from '../core/directives/element-activate.directive';
import { LocalTimePipe } from '../core/pipes/local-time-pipe.pipe';
import { IconsProviderModule } from '../icons-provider.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AboutUsComponent } from './about-us/about-us.component';
import { ScrollMoreButton } from '../core/components/scroll-more-button/scroll-more-button.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    //#region  Directives
    ElementActivateDirective,
    //#endregion

    //#region Pipes
    LocalTimePipe,
    //#endregion

    //#region Components
    AboutUsComponent,
    HomeComponent,
    //#endregion

    //#region Common component
    ScrollMoreButton,
    //#endregion
  ],
  imports: [
    CommonModule,
    IconsProviderModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzMenuModule,
    NzSubMenuComponent,
    NzIconModule,
    NzIconDirective,
    IconModule,
    NzInputModule,
    NzInputGroupComponent,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzPaginationComponent,
    BrowserAnimationsModule,
    NzTransferModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzCarouselModule,
    NzRadioModule,
    NzImageModule,
    NzCardModule,
    NzDrawerModule,
    NzSwitchModule,
    NzDropDownModule,
    NzDropdownMenuComponent,
    NzToolTipModule,
    NzCollapseModule,
    NgxChartsModule,
    NzFlexModule,
    NzEmptyModule,
    NzTypographyModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class FeatureModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// export function initializeApp(appInitService: AppInitService) {
//   return (): Promise<any> => {
//     return appInitService.Init();
//   };
// }
