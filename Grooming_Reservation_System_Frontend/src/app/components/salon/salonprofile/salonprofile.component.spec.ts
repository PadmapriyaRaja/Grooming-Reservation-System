import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonprofileComponent } from './salonprofile.component';

describe('SalonprofileComponent', () => {
  let component: SalonprofileComponent;
  let fixture: ComponentFixture<SalonprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonprofileComponent]
    });
    fixture = TestBed.createComponent(SalonprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
