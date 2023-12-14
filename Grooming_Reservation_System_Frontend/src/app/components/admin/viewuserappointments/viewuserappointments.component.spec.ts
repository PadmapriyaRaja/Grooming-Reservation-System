import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserappointmentsComponent } from './viewuserappointments.component';

describe('ViewuserappointmentsComponent', () => {
  let component: ViewuserappointmentsComponent;
  let fixture: ComponentFixture<ViewuserappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewuserappointmentsComponent]
    });
    fixture = TestBed.createComponent(ViewuserappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
