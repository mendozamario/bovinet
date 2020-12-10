import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settlement } from '../models/settlement';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  baseUrl: string;
  apiUrl="api/settlement/";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { 
    this.baseUrl = baseUrl;
  }

  get(): Observable<Settlement[]>{
    return this.http.get<Settlement[]>(this.baseUrl + this.apiUrl);
  }

  post(settlement: Settlement): Observable<Settlement>{
    return this.http.post<Settlement>(this.baseUrl + this.apiUrl, settlement);
  }

  delete(code: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl + this.apiUrl + code);
  }
}
