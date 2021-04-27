import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnboardLog } from '../model/onboard-log';

@Injectable({
  providedIn: 'root'
})
export class OnboardLogService {

  private baseUrl: string = "http://localhost:8080/api/v1/onboardLogs";
  constructor(private httpClient: HttpClient) { }

  getFullOnboardLogsList(): Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`);
  }

  getOnboardLogByOnboardId(onboardId:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/onboardId=${onboardId}`);
  }

  getOnboardLogByCandidateId(candidateId:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/candidateId=${candidateId}`);
  }

  getOnboardLogByUser(user:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/user=${user}`);
  }

  getOnboardLogByYear(year:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/year=${year}`);
  }

  getOnboardLogByMonth(month:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/month=${month}`);
  }

  getOnboardLogByDate(date:string):Observable<OnboardLog[]>{
    return this.httpClient.get<OnboardLog[]>(`${this.baseUrl}`+`/date=${date}`);
  }

}
