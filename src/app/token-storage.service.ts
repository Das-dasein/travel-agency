import { Injectable } from '@angular/core';

const TOKEN_KEY = '[TA] auth-token';

export const TOKEN_HEADER = 'Authorization';
export const INVALID_LOGIN_STATUS = 302;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}
