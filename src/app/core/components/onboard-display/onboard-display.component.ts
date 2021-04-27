import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/auth/services/authorization.service';
import { Onboard } from '../../model/onboard';
import { OnboardService } from '../../services/onboard.service';

@Component({
  selector: 'app-onboard-display',
  templateUrl: './onboard-display.component.html',
  styleUrls: ['./onboard-display.component.css']
})
export class OnboardDisplayComponent implements OnInit {

  parameter: string;
  value: string;
  onboards:Onboard[];
  constructor(private onboardService: OnboardService, private router: Router,
              private authService: AuthorizationService) { }

  ngOnInit(): void {
    this.onboardService.getFullOnboardsList().subscribe((data) =>{
      this.onboards = data;  
    });
  }

  updateOnboard(onboardId:number){
    this.router.navigate(['/update-onboard',onboardId]);
  }

  deleteOnboard(onboardId:number){
      if(confirm("Are you sure you want to delete Onboard with Id: " + onboardId +" ?"))
          this.onboardService.deleteOnboard(onboardId,this.authService.user.name,
                                            this.authService.user.email).subscribe(() =>{
              this.router.navigate(['/candidates'])
          }, () =>{
            alert("Delete Failed");
          });
    }
  
  searchByParameter(){
    switch (this.parameter){
      case "onboardId": this.onboardService.getOnboardByOnboardId(this.value).subscribe((data) =>{
                          this.onboards = data;  
                        });
                          break;
      case "candidateId": this.onboardService.getOnboardByCandidateId(this.value).subscribe((data) =>{
                            this.onboards = data;  
                          });
                          break;
      case "hmId"      : this.onboardService.getOnboardByhmId(this.value).subscribe((data) =>{
                            this.onboards = data;  
                          });
                          break;
      case "onboardStatus": this.onboardService.getOnboardByOnboardStatus(this.value).subscribe((data) =>{
                            this.onboards = data;  
                          });
                          break;
      case "firstName": this.onboardService.getOnboardByFirstName(this.value).subscribe((data) =>{
                          this.onboards = data;  
                        });
                        break;
      case "lastName": this.onboardService.getOnboardByLastName(this.value).subscribe((data) =>{
                          this.onboards = data;  
                        });
                        break;
      case "college": this.onboardService.getOnboardByCollege(this.value).subscribe((data) =>{
                        this.onboards = data;  
                      });
                      break;
      case "location": this.onboardService.getOnboardByLocation(this.value).subscribe((data) =>{
                        this.onboards = data;  
                      });
                      break;
      case "skill": this.onboardService.getOnboardBySkill(this.value).subscribe((data) =>{
                        this.onboards = data;  
                      });
                      break;
      case "managerName": this.onboardService.getOnboardByManagerName(this.value).subscribe((data) =>{
                        this.onboards = data;  
                      });
                      break;
    }
  }

  resetSearch(){
    this.onboardService.getFullOnboardsList().subscribe((data) =>{
      this.onboards = data;  
    });
  }
}
