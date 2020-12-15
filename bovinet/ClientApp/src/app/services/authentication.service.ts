import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('api/Users', user);
  }

  loginUser(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>('api/Users/Login', loginRequest);
  }

  setCurrentUser(user: User): void {
    localStorage.setItem(user.token, 'user_token');
    localStorage.setItem(JSON.stringify(user), 'current_user');
  }
}
