import { TestBed, inject } from '@angular/core/testing';

import { AuthGuradService } from './auth-gurad.service';

describe('AuthGuradService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuradService]
    });
  });

  it('should be created', inject([AuthGuradService], (service: AuthGuradService) => {
    expect(service).toBeTruthy();
  }));
});
