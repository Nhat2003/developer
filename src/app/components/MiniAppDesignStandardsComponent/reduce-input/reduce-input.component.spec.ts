import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceInputComponent } from './reduce-input.component';

describe('ReduceInputComponent', () => {
  let component: ReduceInputComponent;
  let fixture: ComponentFixture<ReduceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduceInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
