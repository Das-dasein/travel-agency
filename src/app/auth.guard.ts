import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private token: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const notAuth = route.data.notAuth;

    return notAuth ? !this.token.isAuthenticated() : this.token.isAuthenticated();
  }

}
