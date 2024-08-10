import { inject } from '@angular/core';
import { AppInitService } from '../../app-init.service';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

export const isAuthenticated = () => {
  const authService = inject(AuthService);
  const userService = inject(UserService);

  return authService.isAuthenticated().pipe(
    map((isAuthenticated: any) => {
      if (!isAuthenticated) {
        authService.login();
        return false;
      }
      userService.getInfo().subscribe((res) => {
        if (res?.locked == true) {
          localStorage.clear();
          sessionStorage.clear();
          alert(
            'Tài khoản của bạn đã bị khóa\nVui lòng liên hệ với quản trị viên để kiểm tra'
          );
          authService.logout();
        }
      });
      return true;
    })
  );
};

export class AuthGuard implements CanActivate {
  router = inject(Router);
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (hasEntity(route.data['breadcrumb'])) {
      return true;
    } else {
      this.router.navigate(['/error', '403']);
      return false;
    }
  }
}

export function hasEntity(entity: string) {
  var entities = localStorage.getItem('entities')?.split(',');
  if (entities && entities.includes(entity)) return true;
  else {
    return false;
  }
}

export function hasPrivilege(privilege: string) {
  if (AppInitService.USER_PRIVILEGES.includes(privilege)) return true;
  return false;
}
