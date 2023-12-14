import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesalonprofileComponent } from './updatesalonprofile.component';

describe('UpdatesalonprofileComponent', () => {
  let component: UpdatesalonprofileComponent;
  let fixture: ComponentFixture<UpdatesalonprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesalonprofileComponent]
    });
    fixture = TestBed.createComponent(UpdatesalonprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
