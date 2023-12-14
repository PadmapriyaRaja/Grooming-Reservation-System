import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsalonComponent } from './viewallsalon.component';

describe('ViewallsalonComponent', () => {
  let component: ViewallsalonComponent;
  let fixture: ComponentFixture<ViewallsalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallsalonComponent]
    });
    fixture = TestBed.createComponent(ViewallsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
