import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HiringManager } from '../model/hiring-manager';

@Injectable({
  providedIn: 'root'
})
export class HiringManagerService {

  private baseUrl: string = "http://localhost:8080/api/v1/hiringManagers";
  constructor(private httpClient: HttpClient) { }

  getAllHiringManagers(){
    return this.httpClient.get<HiringManager[]>(`${this.baseUrl}`);
  }
}
