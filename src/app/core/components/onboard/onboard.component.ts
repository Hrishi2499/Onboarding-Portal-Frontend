import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/auth/services/authorization.service';
import { Candidate } from '../../model/candidate';
import { HiringManager } from '../../model/hiring-manager';
import { Onboard } from '../../model/onboard';
import { CandidateService } from '../../services/candidate.service';
import { HiringManagerService } from '../../services/hiring-manager.service';
import { OnboardService } from '../../services/onboard.service';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  candidateId: string;
  candidate: Candidate;
  onboard: Onboard = new Onboard();
  hiringManager: HiringManager[];
  isDataAvailable = false;

  constructor(private candidateService: CandidateService, private route: ActivatedRoute,
              private onboardService: OnboardService, private router: Router,
              private hiringManagerService: HiringManagerService, private authService: AuthorizationService) { }

  ngOnInit(): void {
    this.candidate = new Candidate();
    this.candidateId =  this.route.snapshot.params["candidateId"];
    this.hiringManagerService.getAllHiringManagers().subscribe((data) =>{
      this.hiringManager = data;
    });

    this.candidateService.getCandidateById(this.candidateId).subscribe((data) =>{
      this.candidate = data[0];
      this.isDataAvailable = true;
    }, error =>{
      window.alert("Onboarding process for this candidate already started");
      this.router.navigate(['/candidates']);
    });  
  }

  createOnboard(onboard: Onboard){
    onboard.user = this.authService.user.name;
    onboard.userEmail = this.authService.user.email;
     this.onboardService.createOnboard(onboard).subscribe((data) =>{
       window.alert("Onboard Created!");
       this.router.navigate(['/onboardees']);
     }, error =>{
       window.alert("Onboarding process for this candidate failed, please try again");
       this.router.navigate(['/candidates']);
    });
}

  onSubmit(){
    this.onboard.candidateId = this.candidate.candidateId;
    if(this.onboard.bgStatus != true)
      this.onboard.bgStatus = false;
    
    if(this.onboard.graduation != true)
      this.onboard.graduation = false;
    
    if(this.onboard.training != true)
      this.onboard.training = false;

    this.createOnboard(this.onboard);
  }

}
