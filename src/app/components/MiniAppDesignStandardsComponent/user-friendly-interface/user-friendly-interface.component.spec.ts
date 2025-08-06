import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFriendlyInterfaceComponent } from './user-friendly-interface.component';

describe('UserFriendlyInterfaceComponent', () => {
  let component: UserFriendlyInterfaceComponent;
  let fixture: ComponentFixture<UserFriendlyInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFriendlyInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFriendlyInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
