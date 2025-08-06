import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideScreenComponent } from './guide-screen.component';

describe('GuideScreenComponent', () => {
  let component: GuideScreenComponent;
  let fixture: ComponentFixture<GuideScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
