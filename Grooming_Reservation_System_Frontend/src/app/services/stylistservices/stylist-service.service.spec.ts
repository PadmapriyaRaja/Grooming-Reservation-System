import { TestBed } from '@angular/core/testing';

import { StylistServiceService } from './stylist-service.service';

describe('StylistServiceService', () => {
  let service: StylistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StylistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
