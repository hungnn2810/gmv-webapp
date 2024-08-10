import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Environment } from '../../../../environment.interface';
import { Breadcrumb } from '../../../breadcrumb/breadcrumb';
import { hasEntity } from '../../../guards/auth.guard';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

declare let __config: Environment;

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css', '../../../../app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent implements OnInit {
  isCollapsed = false;
  breadcrumbItems = new Array();
  username: string = '';
  logoSrc = '';
  isListAppsVisible = true;
  panelAnimationClass = '';
  config = __config;
  apps: any = [];
  listAppCollapsed = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }

  isActivatedRoute(entity: string) {
    return hasEntity(entity);
  }

  toggleListApps() {
    this.isListAppsVisible = true;
  }

  close(): void {
    this.isListAppsVisible = false;
  }

  private stringToColor(str: string) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var hue = hash % 360;
    var saturation = 60 + Math.random() * 20;
    var lightness = 50 + Math.random() * 10;
    return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
  }

  private getContrastColor(hexColor: string) {
    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16);

    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  }
}
