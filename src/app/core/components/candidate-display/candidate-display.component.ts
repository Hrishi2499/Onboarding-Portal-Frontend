import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../model/candidate';
import { CandidateService } from '../../services/candidate.service'

@Component({
  selector: 'app-candidate-display',
  templateUrl: './candidate-display.component.html',
  styleUrls: ['./candidate-display.component.css']
})
export class CandidateDisplayComponent implements OnInit {

  candidates: Candidate[];
  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  private getAllCandidates(){
      this.candidateService.getFullCandidateList().subscribe((data) =>{
        this.candidates = data;  
      });
  }

}
