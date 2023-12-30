import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnquiriesComponent } from './view-enquiries.component';

describe('ViewEnquiriesComponent', () => {
  let component: ViewEnquiriesComponent;
  let fixture: ComponentFixture<ViewEnquiriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEnquiriesComponent]
    });
    fixture = TestBed.createComponent(ViewEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
