import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineApplied } from '../models/medicine-applied';

@Injectable({
  providedIn: 'root'
})
export class MedicineAppliedService {

  baseUrl: string;
  apiUrl = "api/MedicineApplied/";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<MedicineApplied[]> {
    return this.http.get<MedicineApplied[]>(this.baseUrl + this.apiUrl);
  }

  post(medicineApplied: MedicineApplied): Observable<MedicineApplied> {
    return this.http.post<MedicineApplied>(this.baseUrl + this.apiUrl, medicineApplied);
  }

  delete(code: string): Observable<string>{
    return this.http.delete<string>(this.baseUrl + this.apiUrl + code);
  }
}
