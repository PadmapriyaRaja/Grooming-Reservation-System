import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstylistComponent } from './editstylist.component';

describe('EditstylistComponent', () => {
  let component: EditstylistComponent;
  let fixture: ComponentFixture<EditstylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditstylistComponent]
    });
    fixture = TestBed.createComponent(EditstylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
