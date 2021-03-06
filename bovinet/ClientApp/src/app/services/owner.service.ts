import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  baseUrl: string;
  apiUrl = "api/owner/";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl + this.apiUrl);
  }

  getId(id: string): Observable<Owner> {
    return this.http.get<Owner>(this.baseUrl + this.apiUrl + id);
  }

  post(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.baseUrl + this.apiUrl, owner);
  }

  delete(code: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl + this.apiUrl + code);
  }
}
