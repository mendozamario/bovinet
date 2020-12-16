import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  baseUrl: string;
  apiUrl = "api/product/";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + this.apiUrl);
  }

  post(production: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + this.apiUrl, production);
  }

  delete(code: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl + this.apiUrl + code);
  }
}
