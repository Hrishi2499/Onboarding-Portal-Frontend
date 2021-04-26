import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendData } from '../model/trend-data';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  baseURL = "http://localhost:8080/api/v1/trends";
  constructor(private httpClient: HttpClient) { }

  getTrendByLocation(): Observable<TrendData>{
    return this.httpClient.get<TrendData>(`${this.baseURL}` + `/location`);
  }

  getTrendByManager(): Observable<TrendData>{
    return this.httpClient.get<TrendData>(`${this.baseURL}` + `/manager`);
  }
}
