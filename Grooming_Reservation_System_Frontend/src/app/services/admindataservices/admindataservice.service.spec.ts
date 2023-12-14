import { TestBed } from '@angular/core/testing';

import { AdmindataserviceService } from './admindataservice.service';

describe('AdmindataserviceService', () => {
  let service: AdmindataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmindataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
