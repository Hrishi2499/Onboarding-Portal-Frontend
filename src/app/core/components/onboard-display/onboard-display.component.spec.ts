import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardDisplayComponent } from './onboard-display.component';

describe('OnboardDisplayComponent', () => {
  let component: OnboardDisplayComponent;
  let fixture: ComponentFixture<OnboardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardDisplayComponent ]
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
});
