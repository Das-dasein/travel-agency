import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = 'http://5.101.123.79:8085';

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    const formData = new FormData();
    formData.append('username', login);
    formData.append('password', password);

    return this.http.post(`${this.baseUrl}/login`, formData);
  }

  registration(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/api/user/registration`, {
      login,
      password
    });
  }
}
