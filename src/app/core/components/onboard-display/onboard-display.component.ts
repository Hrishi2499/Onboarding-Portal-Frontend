import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Onboard } from '../../model/onboard';
import { OnboardService } from '../../services/onboard.service';

@Component({
  selector: 'app-onboard-display',
  templateUrl: './onboard-display.component.html',
  styleUrls: ['./onboard-display.component.css']
})
export class OnboardDisplayComponent implements OnInit {

  temp: Onboard[];
  parameter: string;
  value: string;
  onboards:Onboard[];
  constructor(private onboardService: OnboardService, private router: Router) { }

  ngOnInit(): void {
    this.getAllOnboards();
  }
  getAllOnboards(){
    this.onboardService.getFullOnboardsList().subscribe((data) =>{
      this.onboards = data;  
      this.temp = data;
    });
  }

  deleteOnboard(onboardId:number){
      if(confirm("Are you sure you want to delete Onboard with Id: " + onboardId +" ?"))
          this.onboardService.deleteOnboard(onboardId).subscribe((data:any) =>{
              window.location.reload();
          });
    }
  updateOnboard(onboardId:number){
    this.router.navigate(['/update-onboard',onboardId]);
  }
  searchByParameter(){
    switch (this.parameter){
      case "onboardId": this.onboards = this.temp;
                          this.onboards = this.onboards.filter((onboard) =>{
                              return onboard.onboardId == Number(this.value);
                          });
                          break;
      case "candidateId": this.onboards = this.temp;
                          this.onboards = this.onboards.filter((onboard) =>{
                              return onboard.candidateId == Number(this.value);
                          });
                          break;
      case "onboardStatus": this.onboards = this.temp;
                            this.onboards = this.onboards.filter((onboard) =>{
                              return onboard.onboardStatus.toLowerCase().includes((this.value.toLowerCase()));
                          });
                          break;
      case "firstName": this.onboards = this.temp;
                        this.onboards = this.onboards.filter((onboard) =>{
                            return onboard.candidate.firstName.toLowerCase().includes((this.value.toLowerCase()));
                        });
                        break;
      case "lastName": this.onboards = this.temp;
                        this.onboards = this.onboards.filter((onboard) =>{
                            return onboard.candidate.lastName.toLowerCase().includes((this.value.toLowerCase()));
                        });
                        break;
      case "college": this.onboards = this.temp;
                      this.onboards = this.onboards.filter((onboard) =>{
                          return onboard.candidate.college.toLowerCase().includes((this.value.toLowerCase()));
                      });
                      break;
      case "location": this.onboards = this.temp;
                      this.onboards = this.onboards.filter((onboard) =>{
                          return onboard.location.toLowerCase().includes((this.value.toLowerCase()));
                      });
                      break;
    }
  }

  resetSearch(){
      this.onboards = this.temp;
  }
}
