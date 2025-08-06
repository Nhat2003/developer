import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFrameworkComponent } from './update-framework.component';

describe('UpdateFrameworkComponent', () => {
  let component: UpdateFrameworkComponent;
  let fixture: ComponentFixture<UpdateFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFrameworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
