import { TestBed } from '@angular/core/testing';

import { ClientprojectService } from './clientproject.service';

describe('ClientprojectService', () => {
  let service: ClientprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
