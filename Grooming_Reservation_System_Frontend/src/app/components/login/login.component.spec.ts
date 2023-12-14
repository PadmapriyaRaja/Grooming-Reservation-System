import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalonregistrationComponent } from '../salon/salonregistration/salonregistration.component';


describe('SalonregistrationComponent', () => {
  let component: SalonregistrationComponent;
  let fixture: ComponentFixture<SalonregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonregistrationComponent]
    });
    fixture = TestBed.createComponent(SalonregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
