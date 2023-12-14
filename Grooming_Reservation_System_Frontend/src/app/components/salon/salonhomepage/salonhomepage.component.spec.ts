import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonhomepageComponent } from './salonhomepage.component';

describe('SalonhomepageComponent', () => {
  let component: SalonhomepageComponent;
  let fixture: ComponentFixture<SalonhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonhomepageComponent]
    });
    fixture = TestBed.createComponent(SalonhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
