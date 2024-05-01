import { TestBed } from '@angular/core/testing';

import { EmployeeonprojectService } from './employeeonproject.service';

describe('EmployeeonprojectService', () => {
  let service: EmployeeonprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeonprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
