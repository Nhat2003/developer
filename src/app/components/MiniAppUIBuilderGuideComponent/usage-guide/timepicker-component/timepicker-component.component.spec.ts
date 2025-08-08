import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerComponentComponent } from './timepicker-component.component';

describe('TimepickerComponentComponent', () => {
  let component: TimepickerComponentComponent;
  let fixture: ComponentFixture<TimepickerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepickerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepickerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
