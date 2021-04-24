import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnboardComponent } from './update-onboard.component';

describe('UpdateOnboardComponent', () => {
  let component: UpdateOnboardComponent;
  let fixture: ComponentFixture<UpdateOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
