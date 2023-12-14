import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalonComponent } from './editsalon.component';

describe('EditsalonComponent', () => {
  let component: EditsalonComponent;
  let fixture: ComponentFixture<EditsalonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsalonComponent]
    });
    fixture = TestBed.createComponent(EditsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
