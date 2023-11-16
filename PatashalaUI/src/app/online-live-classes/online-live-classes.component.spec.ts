import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLiveClassesComponent } from './online-live-classes.component';

describe('OnlineLiveClassesComponent', () => {
  let component: OnlineLiveClassesComponent;
  let fixture: ComponentFixture<OnlineLiveClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineLiveClassesComponent]
    });
    fixture = TestBed.createComponent(OnlineLiveClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
