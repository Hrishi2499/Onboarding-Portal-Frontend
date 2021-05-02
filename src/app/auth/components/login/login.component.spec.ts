import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import {Location} from '@angular/common';
import { Component } from '@angular/core';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule.withRoutes([
        { path: 'home',component: DummyComponent}
      ]), 
      HttpClientModule, FormsModule],
      providers: [{provide: SocialAuthService, useClass: SocialAuthServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be on the login page before login', () =>{
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  });

  it('should have an h2 tag with content MSAU Onboarding Portal', () =>{
    const h2Ele = fixture.debugElement.query(By.css('h2'));
    expect(h2Ele.nativeElement.textContent).toBe("MSAU Onboarding Portal");
  });

  it('should have an h3 tag with content Login', () =>{
    const h3Ele = fixture.debugElement.query(By.css('h3'));
    expect(h3Ele.nativeElement.textContent).toBe("Login");
  });

  it('should have an two buttons, 1st is disabled when no input provided', () =>{
    const userEmail = fixture.debugElement.query(By.css('#loginUsername')).nativeElement;
    const userPassword = fixture.debugElement.query(By.css('#loginPassword')).nativeElement;
    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons.length == 2);
    const loginButton: HTMLButtonElement = buttons[0].nativeElement;
    expect(loginButton.textContent).toBe("Login");
    
    
      fixture.detectChanges();
      expect(userEmail.value).toBe('');
      expect(userPassword.value).toBe('');

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        debugger;
        fixture.detectChanges();
        expect(loginButton.disabled).toBeTruthy();
  });

});

it('should have an two buttons, 1st is active when input is provided', () =>{
  const userEmail = fixture.debugElement.query(By.css('#loginUsername')).nativeElement;
  const userPassword = fixture.debugElement.query(By.css('#loginPassword')).nativeElement;
  const buttons = fixture.debugElement.queryAll(By.css('button'));
  userEmail.value = 'something';
  userPassword.value = 'something';

  const loginButton: HTMLButtonElement = buttons[0].nativeElement;
  const location = TestBed.get(Location);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(loginButton.disabled).toBeFalsy();
      loginButton.click()
      expect(component.onSubmit).toHaveBeenCalled();

    });
  });

  it('should have 2nd button, active', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const googleSignIn: HTMLButtonElement = buttons[1].nativeElement;
    expect(googleSignIn.textContent).toBe("Sign in with Google");
    expect(googleSignIn.disabled).toBeFalsy()
  });

  it('should be at /home after clicking Sign in with Google', async()=>{
    const location = TestBed.get(Location);
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const googleSignIn: HTMLButtonElement = buttons[0].nativeElement;
    googleSignIn.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('home');
    });
  });

});

class SocialAuthServiceStub{

}

@Component({template:''})
export class DummyComponent {}