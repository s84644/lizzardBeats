import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewTrackComponent } from './preview-track.component';

describe('PreviewTrackComponent', () => {
  let component: PreviewTrackComponent;
  let fixture: ComponentFixture<PreviewTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewTrackComponent]
    });
    fixture = TestBed.createComponent(PreviewTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
