import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Location} from '@angular/common';
import { CandidateDisplayComponent } from './candidate-display.component';
import { By } from '@angular/platform-browser';
import { Candidate } from '../../model/candidate';

describe('CandidateDisplayComponent', () => {
  let component: CandidateDisplayComponent;
  let fixture: ComponentFixture<CandidateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ], 
      declarations: [ CandidateDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 1 h1 tag with content Candidates List', () =>{
    const h1Ele = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Ele.textContent).toBe('Candidates List');
  });

  it('should have 1 select tag', ()=>{
    const selectEle: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(selectEle.length).toBe(5);

    expect(selectEle.options[0].innerHTML).toBe('Id');
    expect(selectEle.options[1].innerHTML).toBe('First Name');
    expect(selectEle.options[2].innerHTML).toBe('Last Name');
    expect(selectEle.options[3].innerHTML).toBe('College');
    expect(selectEle.options[4].innerHTML).toBe('Skill');
  });

  it('should have 1 text input field', () =>{
    const textEle: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(textEle.type).toBe('text');
    expect(textEle.placeholder).toBe("Search by parameters");
  });


  it('should have a table element with 5 colums', ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(5);

    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('Id');
    expect(headerRow.cells[1].innerHTML).toBe('Name');
    expect(headerRow.cells[2].innerHTML).toBe('Email Id');
    expect(headerRow.cells[3].innerHTML).toBe('College');
    expect(headerRow.cells[4].innerHTML).toBe('Skills');
    expect(headerRow.cells[5].innerHTML).toBe('Onboard');
  });
  });

  it('should have an Onboard button then data is available, which should route to /onboard for that candidate', ()=>{
    const location = TestBed.get(Location);
    const cand: Candidate[] = [{candidateId: 1, firstName: "Sample", lastName: "Sample", 
      email: "Sample", college: "DJ", skill:"Java", onboardStarted: true}];
    component.candidates = cand;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      const onboardButton = fixture.debugElement.queryAll(By.css('button'))[2].nativeElement;
      expect(onboardButton.textContent).toBe('Onboard');
      onboardButton.click();
      expect(component.createOnboard).toHaveBeenCalledWith(cand[0].candidateId);
      fixture.detectChanges();
      fixture.whenStable().then(() =>{
          expect(location.path()).toBe('/onboard');
      });
    });
  });

  it('should have 2 buttons', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    const search = buttons[0].nativeElement;
    expect(search.textContent).toBe("Search");
    const reset = buttons[1].nativeElement;
    expect(reset.textContent).toBe("Reset");
  });

  it('should call search functions when search button is clicked', ()=>{
    component.parameter ="some";
    component.value = "thing";
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const search = buttons[0].nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      search.click();
      expect(component.searchByParameter).toHaveBeenCalled();
    });
  });

  it('should call reset functions when reset button is clicked', ()=>{
    component.parameter ="some";
    component.value = "thing";
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const search = buttons[1].nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      search.click();
      expect(component.resetSearch).toHaveBeenCalled();
    });
  });
});
