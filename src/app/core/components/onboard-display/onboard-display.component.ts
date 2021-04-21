import { Component, OnInit } from '@angular/core';
import { Onboard } from '../../model/onboard';
import { OnboardService } from '../../services/onboard.service';

@Component({
  selector: 'app-onboard-display',
  templateUrl: './onboard-display.component.html',
  styleUrls: ['./onboard-display.component.css']
})
export class OnboardDisplayComponent implements OnInit {

  onboards:Onboard[];
  constructor(private onboardService: OnboardService) { }

  ngOnInit(): void {
    this.getAllOnboards();
  }
  getAllOnboards(){
    this.onboardService.getFullOnboardsList().subscribe((data) =>{
      this.onboards = data;  
    });
  }
}
