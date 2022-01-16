import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/api/v1/doctors";

  constructor(private httpClient: HttpClient) { }

  getDoctorsList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }

  getDoctorById(id: any): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseURL}/${id}`);
  }
}
