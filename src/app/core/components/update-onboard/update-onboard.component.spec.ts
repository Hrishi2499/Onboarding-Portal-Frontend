import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService, SocialLoginModule } from 'angularx-social-login';
import {Location} from '@angular/common';
import { UpdateOnboardComponent } from './update-onboard.component';
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Candidate } from '../../model/candidate';
import { HiringManager } from '../../model/hiring-manager';
import { Onboard } from '../../model/onboard';

describe('UpdateOnboardComponent', () => {
  let component: UpdateOnboardComponent;
  let fixture: ComponentFixture<UpdateOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'onboardees', component: DummyComponent},
      ])
        , SocialLoginModule, HttpClientModule, BrowserDynamicTestingModule],
      declarations: [ UpdateOnboardComponent ],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
                              email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard = {onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         };
     component.onboard = onboard;
     component.isDataAvailable = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 h3 component', () =>{
     fixture.detectChanges();
     fixture.whenStable().then(() =>{
      const h3Ele = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(h3Ele.textContent).toBe("Update Onboard")
     });
  });

  it('should have a form', () =>{
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const form: HTMLFormElement = fixture.debugElement.query(By.css('form')).nativeElement;
      expect(form.submit).toBeTruthy();
    });
  });

  it('should have 9 labels', ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
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
  });
    });

    it('should have first 3 input fields to be disabled', () =>{
      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        const input = fixture.debugElement.queryAll(By.css('input[type=text]'));
      expect(input.length).toBe(3);
      fixture.detectChanges();
      expect(input[0].nativeElement.readOnly).toBeTruthy();
      expect(input[1].nativeElement.readOnly).toBeTruthy();
      expect(input[2].nativeElement.readOnly).toBeTruthy();
    });
      });

      it('should have 2 select components with required options in 2nd one', () =>{
        fixture.detectChanges();
        fixture.whenStable().then(() =>{
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
        });

        it('should have a date input', ()=>{
          fixture.detectChanges();
          fixture.whenStable().then(() =>{
          const date = fixture.debugElement.query(By.css('input[type=date]')).nativeElement;
          expect(date.required).toBeTruthy();
        });
        });

        it('should have 3 checkboxes', ()=>{
          fixture.detectChanges();
          fixture.whenStable().then(() =>{
            const checkboxes = fixture.debugElement.queryAll(By.css('input[type=checkbox]'));
            expect(checkboxes.length).toBe(3);
          });
        });
      
        it('should have a create button which routes to /onboardees', ()=>{
          fixture.detectChanges();
          fixture.whenStable().then(() =>{
            const location = TestBed.get(Location);
            const button = fixture.debugElement.query(By.css('button')).nativeElement;
            expect(button.textContent).toBe("Create");
            button.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(location.path()).toBe('/onboardees');
            });
          });
          });      
});

class SocialAuthServiceStub{
  
}

@Component({template:''})
export class DummyComponent {}