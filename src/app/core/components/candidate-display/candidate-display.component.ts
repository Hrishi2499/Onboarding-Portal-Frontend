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
  candidates: Candidate[];
  constructor(private candidateService:CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  private getAllCandidates(){
      this.candidateService.getFullCandidateList().subscribe((data) =>{
        this.candidates = data;  
      });
  }

  createOnboard(candidateId: number){
      this.router.navigate(['create-onboard',candidateId]);
  }

  searchByParameter(){
    switch (this.parameter){
      case "candidateId": this.candidateService.getCandidateById(this.value).subscribe((data) =>{
                          this.candidates = data;  
                           });
                          break;
      case "firstName": this.candidateService.getCandidatesByFirstName(this.value).subscribe((data) =>{
                        this.candidates = data;  
                        });
                        break;
      case "lastName": this.candidateService.getCandidatesByLastName(this.value).subscribe((data) =>{
                        this.candidates = data;  
                         });  
                        break;
      case "college": this.candidateService.getCandidatesByCollege(this.value).subscribe((data) =>{
                      this.candidates = data;  
                       });
                      break;
      case "skill": this.candidateService.getCandidatesBySkill(this.value).subscribe((data) =>{
                      this.candidates = data;  
                       });
      
    }
  }

  resetSearch(){
      this.getAllCandidates();
  }

}
