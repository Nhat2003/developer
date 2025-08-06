import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearInformationComponent } from './clear-information.component';

describe('ClearInformationComponent', () => {
  let component: ClearInformationComponent;
  let fixture: ComponentFixture<ClearInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
