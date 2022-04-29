import { TestBed } from '@angular/core/testing';

import { AuthintercepterService } from './authintercepter.service';

describe('AuthintercepterService', () => {
  let service: AuthintercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthintercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
