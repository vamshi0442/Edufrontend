import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedVideosComponent } from './recorded-videos.component';

describe('RecordedVideosComponent', () => {
  let component: RecordedVideosComponent;
  let fixture: ComponentFixture<RecordedVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordedVideosComponent]
    });
    fixture = TestBed.createComponent(RecordedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
