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

  getOnboardByOnboardId(onboardId:number):Observable<Onboard>{
    return this.httpClient.get<Onboard>(`${this.baseUrl}`+`/onboardId=${onboardId}`);
  }

  createOnboard(onboard:Onboard): Observable<Onboard[]>{
    return this.httpClient.put<Onboard[]>(`${this.baseUrl}`,onboard);
  }

  updateOnboard(onboard:Onboard): Observable<Onboard[]>{
    return this.httpClient.post<Onboard[]>(`${this.baseUrl}`,onboard);
  }

  deleteOnboard(onboardId:number):any{
    return this.httpClient.delete(`${this.baseUrl}`+`/onboardId=${onboardId}`);
  }
}
