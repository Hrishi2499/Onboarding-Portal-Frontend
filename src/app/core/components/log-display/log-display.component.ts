import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardLog } from '../../model/onboard-log';
import { OnboardLogService } from '../../services/onboard-log.service';

@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent implements OnInit {

  parameter: string ="";
  value: string = "";
  month:Date;
  date: Date;
  logs:OnboardLog[];

  constructor(private onboardLogSerivice:OnboardLogService, 
              private router: Router) { }

  ngOnInit(): void {
      this.getAllLogs();
  }

  getAllLogs(){
    this.onboardLogSerivice.getFullOnboardLogsList().subscribe((data) =>{
      this.logs = data;
  }, ()=>{
      alert("Some Error Occured, Please try again later");
      this.router.navigate(['home']);
  });
  }

  searchByParameter(){
    if(this.value == "" || this.parameter == ""){
      alert("Input cannot be empty !");
      return;
    }
      switch (this.parameter){
        case "candidateId": if(! /^\d+$/.test(this.value)){
                              alert("Input cannot contain alphabets!");
                              return;
                            }
                            this.onboardLogSerivice.getOnboardLogByCandidateId(this.value).subscribe((data) =>{
                            this.logs = data;  
                             }, () =>{
                               this.displayErrorMessage();
                             });
                            break;
        case "onboardId": if(! /^\d+$/.test(this.value)){
                            alert("Input cannot contain alphabets!");
                            return;
                          }
                          this.onboardLogSerivice.getOnboardLogByOnboardId(this.value).subscribe((data) =>{
                          this.logs = data;  
                          }, () =>{
                            this.displayErrorMessage();
                          });
                          break;
        case "user": this.onboardLogSerivice.getOnboardLogByUser(this.value).subscribe((data) =>{
                          this.logs = data;  
                           }, () =>{
                            this.displayErrorMessage();
                          });  
                          break;
        case "year": this.onboardLogSerivice.getOnboardLogByYear(this.value).subscribe((data) =>{
                        this.logs = data;  
                         }, () =>{
                          this.displayErrorMessage();
                        });
                        break;
        case "month": this.onboardLogSerivice.getOnboardLogByMonth(this.value).subscribe((data) =>{
                        this.logs = data;  
                         }, () =>{
                          this.displayErrorMessage();
                        });
                         break;
        case "date": this.onboardLogSerivice.getOnboardLogByDate(this.value).subscribe((data) =>{
                          this.logs = data;  
                           }, () =>{
                            this.displayErrorMessage();
                          });
                           break;
      }
      if(this.logs.length==0){
        alert("No records found, check the search parameters once again");
        this.getAllLogs();
      }
  }
  displayErrorMessage() {
    alert("Please check the search parameters once again");
    this.resetSearch();

  }
  resetSearch(){
      this.value = "";
      this.parameter="";
      this.getAllLogs();
  }

}
