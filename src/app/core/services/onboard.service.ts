import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Onboard } from '../model/onboard';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  private baseUrl: string = "http://localhost:8080/api/v1/onboards";
  constructor(private httpClient: HttpClient) { }

  getFullOnboardsList(): Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`);
}
}
