import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Production } from '../models/production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  baseUrl: string;
  apiUrl = "api/production";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Production[]> {
    return this.http.get<Production[]>(this.baseUrl + this.apiUrl);
  }

  post(production: Production): Observable<Production> {
    return this.http.post<Production>(this.baseUrl + this.apiUrl, production);
  }
}
