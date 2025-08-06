import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualStandardComponent } from './visual-standard.component';

describe('VisualStandardComponent', () => {
  let component: VisualStandardComponent;
  let fixture: ComponentFixture<VisualStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualStandardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
