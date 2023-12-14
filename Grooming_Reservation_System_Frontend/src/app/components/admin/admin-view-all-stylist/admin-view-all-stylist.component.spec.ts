import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllStylistComponent } from './admin-view-all-stylist.component';

describe('AdminViewAllStylistComponent', () => {
  let component: AdminViewAllStylistComponent;
  let fixture: ComponentFixture<AdminViewAllStylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewAllStylistComponent]
    });
    fixture = TestBed.createComponent(AdminViewAllStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
