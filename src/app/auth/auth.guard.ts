import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

const LOGIN = 'login';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private url: string;
  constructor(private router: Router,
    private authService: AuthService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;
    return this.userLogged();
  }

  public userLogged(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.authService.redirectUrl = this.url;
      this.router.navigate([LOGIN]);
      return false;
    }
  }
}
