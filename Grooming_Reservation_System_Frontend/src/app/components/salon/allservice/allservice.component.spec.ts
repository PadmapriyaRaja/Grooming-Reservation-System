import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllserviceComponent } from './allservice.component';

describe('AllserviceComponent', () => {
  let component: AllserviceComponent;
  let fixture: ComponentFixture<AllserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllserviceComponent]
    });
    fixture = TestBed.createComponent(AllserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
