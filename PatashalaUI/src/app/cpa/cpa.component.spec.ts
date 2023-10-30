import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaComponent } from './cpa.component';

describe('CpaComponent', () => {
  let component: CpaComponent;
  let fixture: ComponentFixture<CpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpaComponent]
    });
    fixture = TestBed.createComponent(CpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
