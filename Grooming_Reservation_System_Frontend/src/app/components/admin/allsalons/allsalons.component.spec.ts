import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsalonsComponent } from './allsalons.component';

describe('AllsalonsComponent', () => {
  let component: AllsalonsComponent;
  let fixture: ComponentFixture<AllsalonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllsalonsComponent]
    });
    fixture = TestBed.createComponent(AllsalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
