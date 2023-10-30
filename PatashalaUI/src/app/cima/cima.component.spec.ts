import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimaComponent } from './cima.component';

describe('CimaComponent', () => {
  let component: CimaComponent;
  let fixture: ComponentFixture<CimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CimaComponent]
    });
    fixture = TestBed.createComponent(CimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
