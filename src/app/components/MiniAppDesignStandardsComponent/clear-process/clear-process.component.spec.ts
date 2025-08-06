import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearProcessComponent } from './clear-process.component';

describe('ClearProcessComponent', () => {
  let component: ClearProcessComponent;
  let fixture: ComponentFixture<ClearProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
