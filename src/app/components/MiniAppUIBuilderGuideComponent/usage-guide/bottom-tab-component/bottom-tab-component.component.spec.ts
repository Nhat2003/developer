import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTabComponentComponent } from './bottom-tab-component.component';

describe('BottomTabComponentComponent', () => {
  let component: BottomTabComponentComponent;
  let fixture: ComponentFixture<BottomTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomTabComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
