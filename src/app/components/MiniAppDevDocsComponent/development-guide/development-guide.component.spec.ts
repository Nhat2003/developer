import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentGuideComponent } from './development-guide.component';

describe('DevelopmentGuideComponent', () => {
  let component: DevelopmentGuideComponent;
  let fixture: ComponentFixture<DevelopmentGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
