import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographyComponentComponent } from './typography-component.component';

describe('TypographyComponentComponent', () => {
  let component: TypographyComponentComponent;
  let fixture: ComponentFixture<TypographyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypographyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypographyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
