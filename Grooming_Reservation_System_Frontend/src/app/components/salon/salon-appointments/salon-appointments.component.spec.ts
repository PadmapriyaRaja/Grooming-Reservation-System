import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonAppointmentsComponent } from './salon-appointments.component';

describe('SalonAppointmentsComponent', () => {
  let component: SalonAppointmentsComponent;
  let fixture: ComponentFixture<SalonAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonAppointmentsComponent]
    });
    fixture = TestBed.createComponent(SalonAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
