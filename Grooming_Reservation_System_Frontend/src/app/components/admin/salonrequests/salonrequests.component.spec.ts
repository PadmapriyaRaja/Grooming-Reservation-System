import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonrequestsComponent } from './salonrequests.component';

describe('SalonrequestsComponent', () => {
  let component: SalonrequestsComponent;
  let fixture: ComponentFixture<SalonrequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonrequestsComponent]
    });
    fixture = TestBed.createComponent(SalonrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
