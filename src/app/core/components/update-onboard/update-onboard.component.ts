import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HiringManager } from '../../model/hiring-manager';
import { Onboard } from '../../model/onboard';
import { HiringManagerService } from '../../services/hiring-manager.service';
import { OnboardService } from '../../services/onboard.service';

@Component({
  selector: 'app-update-onboard',
  templateUrl: './update-onboard.component.html',
  styleUrls: ['./update-onboard.component.css']
})
export class UpdateOnboardComponent implements OnInit {

  onboard: Onboard = new Onboard();
  hiringManager: HiringManager[];
  onboardId: number;
  isDataAvailable = false;

  constructor(private onboardService: OnboardService, private router: Router,
              private route: ActivatedRoute, private hiringManagerService: HiringManagerService) { }

  ngOnInit(): void {
      this.onboardId =  this.route.snapshot.params["onboardId"];
      this.onboardService.getOnboardByOnboardId(this.onboardId).subscribe((data) =>{
        this.onboard = data;
        this.isDataAvailable = true;
      }, error =>{
          window.alert("This Onboard does not exsist");
          this.router.navigate(['/onboardees']);
      });
      this.hiringManagerService.getAllHiringManagers().subscribe((data) =>{
        this.hiringManager = data;
    });
  }

  onSubmit(){
    if(this.onboard.bgStatus != true)
      this.onboard.bgStatus = false;
    
    if(this.onboard.graduation != true)
      this.onboard.graduation = false;
    
    if(this.onboard.training != true)
      this.onboard.training = false;

    this.onboardService.updateOnboard(this.onboard).subscribe((data) =>{
        window.alert("Onboard updated successfully");
        this.router.navigate(['/onboardees']);
    }, error =>{
        window.alert("Update Failed, Please try again");
        this.router.navigate(['/onboardees']);
    });
  }

}
