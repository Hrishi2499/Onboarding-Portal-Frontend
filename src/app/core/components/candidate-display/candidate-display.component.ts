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
      }, () =>{
        alert("Some error occured, Please try again later");
        this.router.navigate(['home'])
      });
  }

  createOnboard(candidateId: number){
      this.router.navigate(['create-onboard',candidateId]);
  }

  searchByParameter(){
    switch (this.parameter){
      case "candidateId": this.candidateService.getCandidateById(this.value).subscribe((data) =>{
                          this.candidates = data;  
                           }, () =>{
                             alert("No records Found, please check the search parameter, it must be a number");
                             this.resetSearch();
                           });
                          break;
      case "firstName": this.candidateService.getCandidatesByFirstName(this.value).subscribe((data) =>{
                        this.candidates = data;  
                        }, () =>{
                          alert("No records Found, please check the search parameter");
                          this.resetSearch();
                        });
                        break;
      case "lastName": this.candidateService.getCandidatesByLastName(this.value).subscribe((data) =>{
                        this.candidates = data;  
                         }, () =>{
                          alert("No records Found, please check the search parameter");
                          this.resetSearch();
                        });  
                        break;
      case "college": this.candidateService.getCandidatesByCollege(this.value).subscribe((data) =>{
                      this.candidates = data;  
                       }, () =>{
                        alert("No records Found, please check the search parameter");
                        this.resetSearch();
                      });
                      break;
      case "skill": this.candidateService.getCandidatesBySkill(this.value).subscribe((data) =>{
                      this.candidates = data;  
                       }, () =>{
                        alert("No records Found, please check the search parameter");
                        this.resetSearch();
                      });
      
    }
  }

  resetSearch(){
      this.value ="";
      this.parameter="";
      this.getAllCandidates();
  }

}
