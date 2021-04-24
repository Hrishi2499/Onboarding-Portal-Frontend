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

  getCandidateById(candidateId: number): Observable<Candidate>{
    return this.httpClient.get<Candidate>(`${this.baseUrl}/candidateId=${candidateId}`);
  }
}
