import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl: string = "http://localhost:8080/api/v1/candidates";
  constructor(private httpClient: HttpClient) { }

  getFullCandidateList(): Observable<Candidate[]>{
      return this.httpClient.get<Candidate[]>(`${this.baseUrl}`);
  }

  getCandidateById(candidateId: string): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseUrl}/candidateId=${candidateId}`);
  }

  getCandidatesByFirstName(firstName: string): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseUrl}/firstName=${firstName}`);
  }

  getCandidatesByLastName(lastName: string): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseUrl}/lastName=${lastName}`);
  }
  getCandidatesByCollege(college: string): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseUrl}/college=${college}`);
  }
  getCandidatesBySkill(skill: string): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(`${this.baseUrl}/skill=${skill}`);
  }
}
