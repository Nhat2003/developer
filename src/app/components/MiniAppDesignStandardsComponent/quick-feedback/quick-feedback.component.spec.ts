import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFeedbackComponent } from './quick-feedback.component';

describe('QuickFeedbackComponent', () => {
  let component: QuickFeedbackComponent;
  let fixture: ComponentFixture<QuickFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
