import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopAppComponent } from './develop-app.component';

describe('DevelopAppComponent', () => {
  let component: DevelopAppComponent;
  let fixture: ComponentFixture<DevelopAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
