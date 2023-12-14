import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentdisplayComponent } from './appointmentdisplay.component';

describe('AppointmentdisplayComponent', () => {
  let component: AppointmentdisplayComponent;
  let fixture: ComponentFixture<AppointmentdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentdisplayComponent]
    });
    fixture = TestBed.createComponent(AppointmentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
