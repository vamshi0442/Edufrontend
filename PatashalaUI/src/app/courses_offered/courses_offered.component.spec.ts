import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyHubVideosComponent } from './study-hub-videos.component';

describe('StudyHubVideosComponent', () => {
  let component: StudyHubVideosComponent;
  let fixture: ComponentFixture<StudyHubVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyHubVideosComponent]
    });
    fixture = TestBed.createComponent(StudyHubVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
