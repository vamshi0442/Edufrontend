import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmausComponent } from './cmaus.component';

describe('CmausComponent', () => {
  let component: CmausComponent;
  let fixture: ComponentFixture<CmausComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmausComponent]
    });
    fixture = TestBed.createComponent(CmausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
