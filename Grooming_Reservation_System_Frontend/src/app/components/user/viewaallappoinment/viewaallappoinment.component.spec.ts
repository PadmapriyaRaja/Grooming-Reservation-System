import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaallappoinmentComponent } from './viewaallappoinment.component';

describe('ViewaallappoinmentComponent', () => {
  let component: ViewaallappoinmentComponent;
  let fixture: ComponentFixture<ViewaallappoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewaallappoinmentComponent]
    });
    fixture = TestBed.createComponent(ViewaallappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
