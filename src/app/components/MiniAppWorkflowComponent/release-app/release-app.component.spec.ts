import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseAppComponent } from './release-app.component';

describe('ReleaseAppComponent', () => {
  let component: ReleaseAppComponent;
  let fixture: ComponentFixture<ReleaseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
