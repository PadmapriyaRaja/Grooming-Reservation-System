import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallappointmentsComponent } from './viewallappointments.component';

describe('ViewallappointmentsComponent', () => {
  let component: ViewallappointmentsComponent;
  let fixture: ComponentFixture<ViewallappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallappointmentsComponent]
    });
    fixture = TestBed.createComponent(ViewallappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
