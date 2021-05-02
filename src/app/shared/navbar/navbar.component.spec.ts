import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import {Location} from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AuthorizationService } from '../../auth/services/authorization.service';
import { CanActivate } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent},
        {path: 'candidates', component: DummyComponent},
        {path: 'onboardees', component: DummyComponent},
        {path: 'trends', component: DummyComponent},
        {path: 'logs', component: DummyComponent},
        {path: 'login', component: DummyComponent}
      ])],
      declarations: [ NavbarComponent ],
      providers: [{provide: AuthorizationService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 6 anchor tags', () =>{
    const aEle = fixture.debugElement.queryAll(By.css("a"));
    expect(aEle.length).toBe(6);
  });

  it('should have 1 logout button', () =>{
    const location = TestBed.get(Location);
    const logoutButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    expect(logoutButton.textContent).toBe("Logout");
    });


  it('should redirect to login when logout is clicked', ()=>{
    const location = TestBed.get(Location);
    const logoutButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    logoutButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('');
    });
  })

  it('should redirect to / when home is clicked', () =>{
    const location = TestBed.get(Location);
    const home = fixture.debugElement.queryAll(By.css("a"))[1].nativeElement;
    expect(home.textContent).toBe("Home");
    home.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it('should redirect to /candidates when Candidates is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[2].nativeElement;
    expect(link.textContent).toBe("Candidates");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/candidates');
    });
  });

  it('should redirect to /onboardees when Onboards is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[3].nativeElement;
    expect(link.textContent).toBe("Onboardees");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/onboardees');
    });
  });

  it('should redirect to /trends when Trends is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[4].nativeElement;
    expect(link.textContent).toBe("Analytics");
    link.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/trends');
    });
  });

  it('should redirect to /logs when Logs is clicked', () =>{
    const location = TestBed.get(Location);
    const link = fixture.debugElement.queryAll(By.css("a"))[5].nativeElement;
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
