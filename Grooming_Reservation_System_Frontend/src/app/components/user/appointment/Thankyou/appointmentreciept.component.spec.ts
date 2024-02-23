import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentrecieptComponent } from './appointmentreciept.component';

describe('AppointmentrecieptComponent', () => {
  let component: AppointmentrecieptComponent;
  let fixture: ComponentFixture<AppointmentrecieptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentrecieptComponent]
    });
    fixture = TestBed.createComponent(AppointmentrecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
