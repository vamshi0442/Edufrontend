import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmaComponent } from './cma.component';

describe('CmaComponent', () => {
  let component: CmaComponent;
  let fixture: ComponentFixture<CmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmaComponent]
    });
    fixture = TestBed.createComponent(CmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
