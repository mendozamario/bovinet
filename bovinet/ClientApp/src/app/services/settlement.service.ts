import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settlement } from '../models/settlement';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  baseUrl: string;
  apiurl="api/settlement";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) { 
    this.baseUrl = baseUrl;
  }

  get(): Observable<Settlement[]>{
    return this.http.get<Settlement[]>(this.baseUrl + this.apiurl);
  }

  post(settlement: Settlement): Observable<Settlement>{
    return this.http.post<Settlement>(this.baseUrl + this.apiurl, settlement);
  }
}
