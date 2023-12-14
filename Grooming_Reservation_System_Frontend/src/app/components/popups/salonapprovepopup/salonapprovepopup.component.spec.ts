import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonapprovepopupComponent } from './salonapprovepopup.component';

describe('SalonapprovepopupComponent', () => {
  let component: SalonapprovepopupComponent;
  let fixture: ComponentFixture<SalonapprovepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonapprovepopupComponent]
    });
    fixture = TestBed.createComponent(SalonapprovepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
