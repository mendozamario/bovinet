import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { 
  }

  getCurrentUser(): User{
    const userStr = localStorage.getItem('current_user');
    console.log(userStr);
    return JSON.parse(userStr);
  }

  getToken

  registerUser(user: User): Observable<User> {
    return this.http.post<User>('api/Users', user);
  }

  loginUser(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>('api/Users/Login', loginRequest);
  }

  setCurrentUser(user: User): void {
    localStorage.setItem('user_token', user.token );
    localStorage.setItem('current_user', JSON.stringify(user) );
  }
}
