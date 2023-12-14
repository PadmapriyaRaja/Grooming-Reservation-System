import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallserviceComponent } from './viewallservice.component';

describe('ViewallserviceComponent', () => {
  let component: ViewallserviceComponent;
  let fixture: ComponentFixture<ViewallserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallserviceComponent]
    });
    fixture = TestBed.createComponent(ViewallserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
