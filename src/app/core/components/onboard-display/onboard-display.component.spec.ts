import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnboardService } from '../../services/onboard.service';
import {Location} from '@angular/common';
import { AuthorizationService } from '../../../auth/services/authorization.service';
import { OnboardDisplayComponent } from './onboard-display.component';
import { Onboard } from '../../model/onboard';
import { By } from '@angular/platform-browser';
import { Candidate } from '../../model/candidate';
import { HiringManager } from '../../model/hiring-manager';

describe('OnboardDisplayComponent', () => {
  let component: OnboardDisplayComponent;
  let fixture: ComponentFixture<OnboardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ OnboardDisplayComponent ],
      providers: [{provide: AuthorizationService, useClass: AuthorizationServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 1 h1 tag with content Onboardees List', () =>{
    const h1Ele = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Ele.textContent).toBe('Onboardees List');
  })

  it('should have 1 select tag', ()=>{
    const selectEle: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(selectEle.length).toBe(10);
    expect(selectEle.options[0].innerHTML).toBe('Onboard Id');
    expect(selectEle.options[1].innerHTML).toBe('Candidate Id');
    expect(selectEle.options[2].innerHTML).toBe('Hiring Manager Id');
    expect(selectEle.options[3].innerHTML).toBe('Hiring Manager Name');
    expect(selectEle.options[4].innerHTML).toBe('First Name');
    expect(selectEle.options[5].innerHTML).toBe('Last Name');
    expect(selectEle.options[6].innerHTML).toBe('College');
    expect(selectEle.options[7].innerHTML).toBe('Location');
    expect(selectEle.options[8].innerHTML).toBe('Skill');
    expect(selectEle.options[9].innerHTML).toBe('Onboard Status');
    
  });

  it('should have 1 text input field', () =>{
    const textEle: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(textEle.type).toBe('text');
    expect(textEle.placeholder).toBe("Search by parameters");
  });

  it('should have 2 buttons', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    const search = buttons[0].nativeElement;
    expect(search.textContent).toBe("Search");
    const reset = buttons[1].nativeElement;
    expect(reset.textContent).toBe("Reset");
  });

  it('should have two buttons when an onboard is present', () =>{
    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
                            email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard[] = [{onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         }];
    component.onboards = onboard;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      expect(buttons.length).toBe(4);
    });
  });

  it('should have two buttons when an onboard is present, edit button must route to edit page', () =>{
    const location = TestBed.get(Location);
    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
                            email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard[] = [{onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         }];
    component.onboards = onboard;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const editBtn = fixture.debugElement.queryAll(By.css('button'))[2].nativeElement;
      editBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        expect(location.path()).toBe('/update-onboard');
      });
    });
  });

  it('should have two buttons when an onboard is present, delete button must route to candidate page', () =>{
    const location = TestBed.get(Location);
    const cand: Candidate = {candidateId: 1, firstName: "Sample", lastName: "Sample", 
                            email: "Sample", college: "DJ", skill:"Java", onboardStarted: true};
    const hm: HiringManager = {hmId: 101, hmEmail: "Sample", name:"Manager", password:"something"};
    const onboard: Onboard[] = [{onboardId: 42, candidate: cand, candidateId:1, 
                            user:"Hrishi", userEmail:"Sample", hmId:101, hiringManager:hm,
                          onboardStatus: "Started", startDate:"2017-01-01", eta:"2018-01-01", 
                          location:"Mumbai", bgStatus:false, training: false, graduation: false
                         }];
    component.onboards = onboard;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const editBtn = fixture.debugElement.queryAll(By.css('button'))[3].nativeElement;
      editBtn.click();
      fixture.detectChanges();
      fixture.whenStable().then(() =>{
        expect(location.path()).toBe('/candidates');
      });
    });
  });

});

class AuthorizationServiceStub{

}