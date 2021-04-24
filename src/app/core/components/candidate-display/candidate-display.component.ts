import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../../model/candidate';
import { CandidateService } from '../../services/candidate.service'

@Component({
  selector: 'app-candidate-display',
  templateUrl: './candidate-display.component.html',
  styleUrls: ['./candidate-display.component.css']
})
export class CandidateDisplayComponent implements OnInit {

  parameter: string;
  value: string;
  temp: Candidate[];
  candidates: Candidate[];
  constructor(private candidateService:CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  private getAllCandidates(){
      this.candidateService.getFullCandidateList().subscribe((data) =>{
        this.candidates = data;  
        this.temp = data;
      });
  }

  createOnboard(candidateId: number){
      this.router.navigate(['create-onboard',candidateId]);
  }

  searchByParameter(){
    switch (this.parameter){
      case "candidateId": this.candidates = this.temp;
                          this.candidates = this.candidates.filter((candidate) =>{
                              return candidate.candidateId == Number(this.value);
                          });
                          break;
      case "firstName": this.candidates = this.temp;
                        this.candidates = this.candidates.filter((candidate) =>{
                            return candidate.firstName.toLowerCase().includes((this.value.toLowerCase()));
                        });
      break;
      case "lastName": this.candidates = this.temp;
                        this.candidates = this.candidates.filter((candidate) =>{
                            return candidate.lastName.toLowerCase().includes((this.value.toLowerCase()));
                        });
      break;
      case "college": this.candidates = this.temp;
                      this.candidates = this.candidates.filter((candidate) =>{
                          return candidate.college.toLowerCase().includes((this.value.toLowerCase()));
                      });
    }
  }

  resetSearch(){
      this.candidates = this.temp;
  }

}
