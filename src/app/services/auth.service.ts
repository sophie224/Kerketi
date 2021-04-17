import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(domainId: number, languageId: number, password: string, username: string) {
    return this.http.post(`${environment.apiUrl}/users/login`, {
      domainId,
      languageId,
      password,
      username
    });
  }
}
