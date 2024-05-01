import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeonprojectComponent } from './employeeonproject.component';

describe('EmployeeonprojectComponent', () => {
  let component: EmployeeonprojectComponent;
  let fixture: ComponentFixture<EmployeeonprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeonprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeonprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
