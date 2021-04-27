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

  getOnboardByOnboardId(onboardId:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/onboardId=${onboardId}`);
  }

  getOnboardByCandidateId(candidateId:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/candidateId=${candidateId}`);
  }

  getOnboardByhmId(hmId:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/hmId=${hmId}`);
  }

  getOnboardByFirstName(firstName:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/firstName=${firstName}`);
  }

  getOnboardByLastName(lastName:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/lastName=${lastName}`);
  }

  getOnboardByLocation(location:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/location=${location}`);
  }

  getOnboardBySkill(skill:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/skill=${skill}`);
  }

  getOnboardByCollege(college:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/college=${college}`);
  }

  getOnboardByManagerName(manager:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/managerName=${manager}`);
  }

  getOnboardByOnboardStatus(status:string):Observable<Onboard[]>{
    return this.httpClient.get<Onboard[]>(`${this.baseUrl}`+`/onboardStatus=${status}`);
  }

  createOnboard(onboard:Onboard): Observable<Onboard[]>{
    return this.httpClient.put<Onboard[]>(`${this.baseUrl}`,onboard);
  }

  updateOnboard(onboard:Onboard): Observable<Onboard[]>{
    return this.httpClient.post<Onboard[]>(`${this.baseUrl}`,onboard);
  }

  deleteOnboard(onboardId:number, user:string, userEmail:string):any{
    return this.httpClient.delete(`${this.baseUrl}`+
                                  `/onboardId=${onboardId}&user=${user}&userEmail=${userEmail}`);
  }
}
