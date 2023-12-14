import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstylistComponent } from './addstylist.component';

describe('AddstylistComponent', () => {
  let component: AddstylistComponent;
  let fixture: ComponentFixture<AddstylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddstylistComponent]
    });
    fixture = TestBed.createComponent(AddstylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
