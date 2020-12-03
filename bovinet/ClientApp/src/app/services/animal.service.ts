import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl: string;
  apiUrl = "api/Animal";
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  get(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl + this.apiUrl);
  }

  post(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.baseUrl + this.apiUrl, animal);
  }
}
