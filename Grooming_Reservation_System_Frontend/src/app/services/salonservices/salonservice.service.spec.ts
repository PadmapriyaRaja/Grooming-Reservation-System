import { TestBed } from '@angular/core/testing';

import { SalonService } from './salonservice.service';

describe('SalonserviceService', () => {
  let service: SalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
