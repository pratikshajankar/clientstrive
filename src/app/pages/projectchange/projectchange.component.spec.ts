import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectchangeComponent } from './projectchange.component';

describe('ProjectchangeComponent', () => {
  let component: ProjectchangeComponent;
  let fixture: ComponentFixture<ProjectchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
