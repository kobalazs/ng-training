import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../shared.barrel';

@Injectable()

export class AuthGuard implements CanActivate {
  
  public constructor(protected _authService: AuthService) {
    //
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return !!this._authService.user;
  }

}