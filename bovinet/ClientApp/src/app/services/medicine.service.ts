import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  baseUrl: string;
  apiUrl = "api/medicine/";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.baseUrl + this.apiUrl);
  }

  post(medicine: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(this.baseUrl + this.apiUrl, medicine);
  }

  delete(code: string): Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl + this.apiUrl + code);
  }
}
