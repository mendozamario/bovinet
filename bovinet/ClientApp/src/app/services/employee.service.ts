import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string;
  apiUrl = "api/Employee";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + this.apiUrl);
  }

  post(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + this.apiUrl, employee);
  }
}
