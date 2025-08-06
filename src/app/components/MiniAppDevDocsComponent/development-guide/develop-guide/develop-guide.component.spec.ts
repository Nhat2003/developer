import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopGuideComponent } from './develop-guide.component';

describe('DevelopGuideComponent', () => {
  let component: DevelopGuideComponent;
  let fixture: ComponentFixture<DevelopGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
