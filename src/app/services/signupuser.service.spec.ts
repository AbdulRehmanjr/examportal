import { TestBed } from '@angular/core/testing';

import { SignupuserService } from './signupuser.service';

describe('SignupuserService', () => {
  let service: SignupuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
