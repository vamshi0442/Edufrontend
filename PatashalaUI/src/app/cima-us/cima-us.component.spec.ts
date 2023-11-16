import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimaUsComponent } from './cima-us.component';

describe('CimaUsComponent', () => {
  let component: CimaUsComponent;
  let fixture: ComponentFixture<CimaUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CimaUsComponent]
    });
    fixture = TestBed.createComponent(CimaUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
