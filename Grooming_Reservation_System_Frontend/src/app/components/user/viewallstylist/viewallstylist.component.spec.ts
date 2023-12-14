import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstylistComponent } from './viewallstylist.component';

describe('ViewallstylistComponent', () => {
  let component: ViewallstylistComponent;
  let fixture: ComponentFixture<ViewallstylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallstylistComponent]
    });
    fixture = TestBed.createComponent(ViewallstylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
