import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccaComponent } from './acca.component';

describe('AccaComponent', () => {
  let component: AccaComponent;
  let fixture: ComponentFixture<AccaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccaComponent]
    });
    fixture = TestBed.createComponent(AccaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
