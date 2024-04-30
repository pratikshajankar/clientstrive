import { TestBed } from '@angular/core/testing';

import { ChangeprojectService } from './changeproject.service';

describe('ChangeprojectService', () => {
  let service: ChangeprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
