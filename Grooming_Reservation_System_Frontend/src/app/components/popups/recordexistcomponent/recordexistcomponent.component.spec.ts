import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordexistcomponentComponent } from './recordexistcomponent.component';

describe('RecordexistcomponentComponent', () => {
  let component: RecordexistcomponentComponent;
  let fixture: ComponentFixture<RecordexistcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordexistcomponentComponent]
    });
    fixture = TestBed.createComponent(RecordexistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
