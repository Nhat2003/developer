import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightImportantPointsComponent } from './highlight-important-points.component';

describe('HighlightImportantPointsComponent', () => {
  let component: HighlightImportantPointsComponent;
  let fixture: ComponentFixture<HighlightImportantPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightImportantPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightImportantPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
