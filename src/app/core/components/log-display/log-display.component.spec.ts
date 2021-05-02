import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LogDisplayComponent } from './log-display.component';

describe('LogDisplayComponent', () => {
  let component: LogDisplayComponent;
  let fixture: ComponentFixture<LogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        {path: 'home', component: DummyComponent}
      ])],
      declarations: [ LogDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 1 h1 tag with content Onboards Logs', () =>{
    const h1Ele = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Ele.textContent).toBe('Onboards Logs');
  })

  it('should have 1 select tag', ()=>{
    const selectEle: HTMLSelectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    expect(selectEle.length).toBe(6);

    expect(selectEle.options[0].innerHTML).toBe('Onboard Id');
    expect(selectEle.options[1].innerHTML).toBe('Candidate Id');
    expect(selectEle.options[2].innerHTML).toBe('User');
    expect(selectEle.options[3].innerHTML).toBe('Year');
    expect(selectEle.options[4].innerHTML).toBe('Month');
    expect(selectEle.options[5].innerHTML).toBe('Date');
  });

  it('should have 3 input fields', () =>{
    const textEle= fixture.debugElement.queryAll(By.css('input'));
    expect(textEle.length).toBe(3);
  });

  it('should have 1 text input field', () =>{
    const textEle: HTMLInputElement = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
    expect(textEle.type).toBe('text');
    expect(textEle.placeholder).toBe("Search by parameters");
  });

  it('should have 1 month input field', () =>{
    const monthEle: HTMLInputElement = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;
    expect(monthEle.type).toBe('month');
  });

  it('should have 1 text input field', () =>{
    const dateEle: HTMLInputElement = fixture.debugElement.queryAll(By.css('input'))[2].nativeElement;
    expect(dateEle.type).toBe('date');
  });

  it('should have 2 labels', ()=>{
    const labels = fixture.debugElement.queryAll(By.css('label'));
    expect(labels.length).toBe(2);
    expect(labels[0].nativeElement.textContent).toBe("To Search by Month and Year: ");
    expect(labels[1].nativeElement.textContent).toBe("To Search by Date: ");
  });

  it('should have 2 buttons', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    const search = buttons[0].nativeElement;
    expect(search.textContent).toBe("Search");
    const reset = buttons[1].nativeElement;
    expect(reset.textContent).toBe("Reset");
  });

  it('should call search when search button is clicked', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const search = buttons[0].nativeElement;
    component.parameter ='sas';
    component.value = "asa";
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      search.click();
      expect(component.searchByParameter).toHaveBeenCalled();
    })
  });

  it('should call reset when reset button is clicked', () =>{
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const reset = buttons[1].nativeElement;
    component.parameter ='sas';
    component.value = "asa";
    fixture.detectChanges();
    fixture.whenStable().then(() =>{
      reset.click();
      expect(component.resetSearch).toHaveBeenCalled();
    })
  });

  it('should have a table element with 5 columns', ()=>{
    let tableRows = fixture.nativeElement.querySelectorAll('th');
    expect(tableRows.length).toBe(5);

    // Header row
    expect(tableRows[0].innerHTML).toBe('Log ID');
    expect(tableRows[1].innerHTML).toBe('Timestamp');
    expect(tableRows[2].innerHTML).toBe('Action');
    expect(tableRows[3].innerHTML).toBe('User');
    expect(tableRows[4].innerHTML).toBe('User EmailId');
    });
});

@Component({template:''})
export class DummyComponent{
  
}