import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthorizationService } from '../auth/services/authorization.service';
import { CanActivate } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent},
        {path: 'candidates', component: DummyComponent},
        {path: 'onboardees', component: DummyComponent},
        {path: 'trends', component: DummyComponent},
        {path: 'logs', component: DummyComponent},
        {path: 'login', component: DummyComponent}
      ])],
      providers: [{provide: AuthorizationService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be on location home', () =>{
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  })

  it("should contain h1 tag with content Welcome to the AU Management System's Onboarding Portal", () =>{
    const h1Ele = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(h1Ele.textContent).toBe(" Welcome to the AU Management System's Onboarding Portal ");
  });

  it("should contain h4 tag with content Features", () =>{
    const h4Ele = fixture.debugElement.query(By.css("h4")).nativeElement;
    expect(h4Ele.textContent).toBe("Features");
  });

  it("should contain 4 h5 tags and 4 anchor tags", ()=>{
    const h5Eles = fixture.debugElement.queryAll(By.css("h5"));
    expect(h5Eles.length).toBe(4);
    const aEles = fixture.debugElement.queryAll(By.css("a"));
    expect(aEles.length).toBe(4);
  });

  it('should redirect to /candidates when Candidates is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[0].nativeElement;
    expect(link.textContent).toBe("Candidates");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/candidates');
    });
  });

  it('should redirect to /onboardees when Onboards is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[1].nativeElement;
    expect(link.textContent).toBe("Onboardees");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/onboardees');
    });
  });

  it('should redirect to /trends when Trends is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[2].nativeElement;
    expect(link.textContent).toBe("Analytics");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/trends');
    });
  });

  it('should redirect to /logs when Logs is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[3].nativeElement;
    expect(link.textContent).toBe("Logs");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/logs');
    });
  });

});

class SocialAuthServiceStub implements CanActivate{
  canActivate(){
    return true;
  }
  check(){
    return true;
  }
}

@Component({template:''})
export class DummyComponent {}