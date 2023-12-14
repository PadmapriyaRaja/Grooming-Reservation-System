import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidcomponentComponent } from './invalidcomponent.component';

describe('InvalidcomponentComponent', () => {
  let component: InvalidcomponentComponent;
  let fixture: ComponentFixture<InvalidcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidcomponentComponent]
    });
    fixture = TestBed.createComponent(InvalidcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
