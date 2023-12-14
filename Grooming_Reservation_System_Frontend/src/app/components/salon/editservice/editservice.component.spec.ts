import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditserviceComponent } from './editservice.component';

describe('EditserviceComponent', () => {
  let component: EditserviceComponent;
  let fixture: ComponentFixture<EditserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditserviceComponent]
    });
    fixture = TestBed.createComponent(EditserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
