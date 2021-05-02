import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {Location} from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService, SocialLoginModule } from 'angularx-social-login';

import { OnboardComponent } from './onboard.component';
import { Onboard } from '../../model/onboard';
import { Candidate } from '../../model/candidate';
import { HiringManager } from '../../model/hiring-manager';

describe('OnboardComponent', () => {
  let component: OnboardComponent;
  let fixture: ComponentFixture<OnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'onboardees', component: DummyComponent},
      ])
        , SocialLoginModule, HttpClientModule, BrowserDynamicTestingModule],
      declarations: [ OnboardComponent ],
      providers:[{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
      email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard = {onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         };
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 h3 component with content Create Onboard', ()=>{
    const h3Ele = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Ele.textContent).toBe('Create Onboard');
  });

  it('should have a form', () =>{
    const form: HTMLFormElement = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form.submit).toBeTruthy();
  });

  it('should have 9 labels', ()=>{
    const labels = fixture.debugElement.queryAll(By.css('label'));
    expect(labels.length).toBe(9);

    expect(labels[0].nativeElement.textContent).toBe('First Name');
    expect(labels[1].nativeElement.textContent).toBe('Last Name');
    expect(labels[2].nativeElement.textContent).toBe('Email Id');
    expect(labels[3].nativeElement.textContent).toBe('Hiring Manager');
    expect(labels[4].nativeElement.textContent).toBe('Location');
    expect(labels[5].nativeElement.textContent).toBe('Estimated Date of Onboarding');
    expect(labels[6].nativeElement.textContent).toBe('Background Check Done?');
    expect(labels[7].nativeElement.textContent).toBe('Graduation Done?');
    expect(labels[8].nativeElement.textContent).toBe('Training Done?');
  })

  it('should have first 3 input fields to be disabled', () =>{
    const input = fixture.debugElement.queryAll(By.css('input[type=text]'));
    expect(input.length).toBe(3);
    fixture.detectChanges();
    expect(input[0].nativeElement.readOnly).toBeTruthy();
    expect(input[1].nativeElement.readOnly).toBeTruthy();
    expect(input[2].nativeElement.readOnly).toBeTruthy();
  });

  it('should have 2 select components with required options in 2nd one', () =>{
    const selects = fixture.debugElement.queryAll(By.css('select'));
    expect(selects.length).toBe(2);
    expect(selects[0].nativeElement.required).toBeTruthy();
    const locationSelect = selects[1].nativeElement; 
    expect(locationSelect.required).toBeTruthy();
    expect(locationSelect.length).toBe(5);
    expect(locationSelect[0].textContent).toBe('Mumbai');
    expect(locationSelect[1].textContent).toBe('Bangalore');
    expect(locationSelect[2].textContent).toBe('Hyderabad');
    expect(locationSelect[3].textContent).toBe('Chennai');
    expect(locationSelect[4].textContent).toBe('Delhi');
  });

  it('should have a date input', ()=>{
    const date = fixture.debugElement.query(By.css('input[type=date]')).nativeElement;
    expect(date.required).toBeTruthy();
  });

  it('should have 3 checkboxes', ()=>{
    const checkboxes = fixture.debugElement.queryAll(By.css('input[type=checkbox]'));
    expect(checkboxes.length).toBe(3);
  });

  it('should have a create button which routes to /onboardees', ()=>{
    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
      email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard = {onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         };
    component.onboard = onboard;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const location = TestBed.get(Location);
      const button = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(button.textContent).toBe("Create");
      button.click();
      expect(component.createOnboard).toHaveBeenCalledWith(component.onboard);
      
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(location.path()).toBe('/onboardees');
      });
    })
  });
});

class SocialAuthServiceStub{
  
}

@Component({template:''})
export class DummyComponent {}