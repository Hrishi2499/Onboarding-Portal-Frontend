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

  onboard: Onboard;
  hiringManager: HiringManager[];
  onboardId: number;

  constructor(private onboardService: OnboardService, private router: Router,
              private route: ActivatedRoute, private hiringManagerService: HiringManagerService) { }

  ngOnInit(): void {
      this.hiringManagerService.getAllHiringManagers().subscribe((data) =>{
          this.hiringManager = data;
      });
      this.onboardId =  this.route.snapshot.params["onboardId"];
      this.onboardService.getOnboardByOnboardId(this.onboardId).subscribe((data) =>{
        this.onboard = data;
      }, error =>{
          window.alert("This Onboard does not exsist");
          this.router.navigate(['/onboardees']);
      });
  }

  onSubmit(){
    this.onboardService.updateOnboard(this.onboard).subscribe((data) =>{
        window.alert("Onboard updated successfully");
        this.router.navigate(['/onboardees']);
    }, error =>{
        window.alert("Update Failed, Please try again");
        this.router.navigate(['/onboardees']);
    });
  }

}
