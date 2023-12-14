import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstylistComponent } from './allstylist.component';

describe('AllstylistComponent', () => {
  let component: AllstylistComponent;
  let fixture: ComponentFixture<AllstylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllstylistComponent]
    });
    fixture = TestBed.createComponent(AllstylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
