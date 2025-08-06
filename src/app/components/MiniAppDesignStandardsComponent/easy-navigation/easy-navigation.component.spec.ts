import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyNavigationComponent } from './easy-navigation.component';

describe('EasyNavigationComponent', () => {
  let component: EasyNavigationComponent;
  let fixture: ComponentFixture<EasyNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
