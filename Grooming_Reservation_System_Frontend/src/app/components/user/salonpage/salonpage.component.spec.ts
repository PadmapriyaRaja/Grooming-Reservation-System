import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonpageComponent } from './salonpage.component';

describe('SalonpageComponent', () => {
  let component: SalonpageComponent;
  let fixture: ComponentFixture<SalonpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonpageComponent]
    });
    fixture = TestBed.createComponent(SalonpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
